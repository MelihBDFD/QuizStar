import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import CreateQuiz from './pages/CreateQuiz';
import TakeQuiz from './pages/TakeQuiz';
import QuizResults from './pages/QuizResults';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateQuiz />} />
            <Route path="/quiz/:shareCode" element={<TakeQuiz />} />
            <Route path="/quiz/:shareCode/results" element={<QuizResults />} />
            <Route path="*" element={<div>Sayfa bulunamadı</div>} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
