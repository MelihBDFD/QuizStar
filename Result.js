import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true
  },
  playerName: {
    type: String,
    required: true,
    trim: true
  },
  score: {
    type: Number,
    required: true,
    min: 0
  },
  totalQuestions: {
    type: Number,
    required: true,
    min: 1
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

// Create a compound index to ensure a player can only submit once per quiz
resultSchema.index({ quizId: 1, playerName: 1 }, { unique: true });

const Result = mongoose.model('Result', resultSchema);

export default Result;
