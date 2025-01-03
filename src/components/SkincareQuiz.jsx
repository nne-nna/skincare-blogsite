import React from 'react';
import { useNavigate } from "react-router-dom";
import { assets } from '../assets/assets';

const SkincareQuiz = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz"); // Redirects to the quiz page
  };

  return (
    <section className="bg-[#f7f9f8] px-4 py-10 md:py-15 mt-[80px]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-[#2a3932]">
            What’s Your Skin Type?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-2">
            Take our quick quiz to find out your skin type and get personalized
            skincare tips!
          </p>
          <button
            onClick={handleStartQuiz}
            className="mt-6 bg-[#3b4b41] hover:bg-[#5a6f65] text-white font-medium py-2 px-6 rounded-md transition-transform transform hover:scale-105"
          >
            Start Quiz
          </button>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img
            src={assets.skin}
            alt="Skincare Quiz"
            className="w-2/3 sm:w-1/2 md:w-full mx-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SkincareQuiz;


