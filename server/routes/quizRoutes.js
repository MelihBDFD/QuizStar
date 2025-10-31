import express from 'express';
import shortid from 'shortid';
import Quiz from '../models/Quiz.js';
import Result from '../models/Result.js';

const router = express.Router();

// Create a new quiz
router.post('/', async (req, res) => {
  try {
    const { title, description, questions, createdBy } = req.body;
    
    if (!title || !description || !questions || !questions.length) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Generate a unique share code
    const shareCode = shortid.generate();
    
    const quiz = new Quiz({
      title,
      description,
      questions,
      createdBy,
      shareCode
    });

    const savedQuiz = await quiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    console.error('Error creating quiz:', error);
    res.status(500).json({ message: 'Error creating quiz', error: error.message });
  }
});

// Get quiz by share code
router.get('/share/:shareCode', async (req, res) => {
  try {
    const { shareCode } = req.params;
    const quiz = await Quiz.findOne({ shareCode });
    
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    
    // Don't send correct answers to the client
    const quizWithoutAnswers = {
      ...quiz.toObject(),
      questions: quiz.questions.map(q => ({
        ...q,
        options: q.options.map(opt => ({
          _id: opt._id,
          text: opt.text
        }))
      }))
    };
    
    res.json(quizWithoutAnswers);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ message: 'Error fetching quiz', error: error.message });
  }
});

// Submit quiz results
router.post('/:id/results', async (req, res) => {
  try {
    const { id } = req.params;
    const { playerName, answers } = req.body;
    
    if (!playerName || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: 'Invalid request data' });
    }
    
    const quiz = await Quiz.findById(id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    
    // Check if player already submitted
    const existingResult = await Result.findOne({ quizId: id, playerName });
    if (existingResult) {
      return res.status(400).json({ message: 'You have already submitted this quiz' });
    }
    
    // Calculate score
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] && question.options[answers[index]].isCorrect) {
        score++;
      }
    });
    
    const percentage = Math.round((score / quiz.questions.length) * 100);
    
    const result = new Result({
      quizId: quiz._id,
      playerName,
      score,
      totalQuestions: quiz.questions.length,
      percentage
    });
    
    await result.save();
    
    res.status(201).json({
      score,
      total: quiz.questions.length,
      percentage
    });
  } catch (error) {
    console.error('Error submitting results:', error);
    res.status(500).json({ message: 'Error submitting results', error: error.message });
  }
});

// Get quiz results (leaderboard)
router.get('/:id/results', async (req, res) => {
  try {
    const { id } = req.params;
    
    const results = await Result.find({ quizId: id })
      .sort({ score: -1, submittedAt: 1 })
      .limit(50);
    
    res.json(results);
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ message: 'Error fetching results', error: error.message });
  }
});

export default router;
