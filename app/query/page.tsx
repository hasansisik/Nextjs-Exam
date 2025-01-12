'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react';
import questions from './query.json';

export default function QueryPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Levhalar</h1>
      <div className="flex justify-center items-center mb-4">
        <button onClick={handlePrev} className="mr-4">
          <ArrowLeft size={30} />
        </button>
        <div className="card p-4 border rounded-lg shadow-lg">
          <img src={questions[currentQuestionIndex].image} alt="Question" className="w-1/2 mx-auto mb-4" />
          <div className="text-center mb-4">
            <button onClick={toggleAnswer} className="px-5 py-2 rounded-full bg-purple-500 hover:bg-purple-600">
              {showAnswer ? <Eye size={24} className="text-white" /> : <EyeOff size={24} className="text-white" />}
            </button>
          </div>
          {showAnswer && (
            <div className="text-center p-2 rounded bg-green-600">
              <p className="text-white">{questions[currentQuestionIndex].text}</p>
            </div>
          )}
        </div>
        <button onClick={handleNext} className="ml-4">
          <ArrowRight size={30} />
        </button>
      </div>
    </div>
  );
}
