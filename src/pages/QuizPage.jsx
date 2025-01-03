import React, { useState, useEffect } from "react";
import { assets } from '../assets/assets';
import { FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showTimeUpMessage, setShowTimeUpMessage] = useState(false);

  const questions = [
    { id: 1, question: "How does your skin feel after washing?" },
    { id: 2, question: "Does your skin get oily during the day?" },
    { id: 3, question: "Do you experience redness or irritation often?" },
  ];

  const handleAnswerChange = (id, answer) => {
    setAnswers({ ...answers, [id]: answer });

    if (id === 2 && answer === "Yes") {
      setFeedback("You might have oily skin. Don't forget to use a mattifying product!");
    } else if (id === 2 && answer === "No") {
      setFeedback("You might have dry skin. Don't forget to use a moisturizing product!");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    setIsTimerRunning(false);
    setTimer(0);
    console.log(answers);
    setShowResult(true);
  };

  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      setShowTimeUpMessage(true);
      // Auto-submit after 3 seconds when time is up
      setTimeout(() => {
        handleSubmit();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const skinType = answers[2];

  return (
    <div className="">
      <div className="px-4 py-32 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${assets.banner})` }}>
        <div className="text-white text-center mt-10 mb-8">
          <h2 className="text-5xl lg:text-5xl leading-snug font-bold mb-5 font-primary">Is Your Skin Happy? Let's Find Out!</h2>
        </div>
      </div>
      <div className="bg-[#f7f9f8] flex flex-col items-center pb-20">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#2a3932] bg-[#f7f9f8] pt-10">
          <FaQuestion />Discover Your Skin Type
        </h2>

        {/* Progress Bar */}
        <div className="w-[85%] max-w-md bg-gray-200 h-2 rounded-full mb-4 mx-auto">
          <div className="bg-[#3b4b41] h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Timer with color warning */}
        <div className="text-center mt-4">
          <p className={`text-lg font-medium ${timer <= 10 ? 'text-red-500' : ''}`}>
            Time left: {timer}s
          </p>
        </div>

        {/* Time Up Message */}
        {showTimeUpMessage && !showResult && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 w-full max-w-2xl"
          >
            <p className="font-bold">Time's Up!</p>
            <p>Your quiz will be automatically submitted in a moment...</p>
          </motion.div>
        )}

        <div className="w-full max-w-2xl bg-white shadow-md rounded-md p-6">
          {/* Questions */}
          {questions.map((q, index) => (
            currentQuestionIndex === index && (
              <div key={q.id} className="mb-4">
                <p className="text-lg font-medium mb-2">{q.question}</p>
                {q.id === 2 ? (
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`q${q.id}`}
                        value="Yes"
                        onChange={() => handleAnswerChange(q.id, 'Yes')}
                        className="form-radio text-[#3b4b41]"
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`q${q.id}`}
                        value="No"
                        onChange={() => handleAnswerChange(q.id, 'No')}
                        className="form-radio text-[#3b4b41]"
                      />
                      No
                    </label>
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder="Type your answer..."
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#3b4b41]"
                  />
                )}
                {feedback && <p className="text-sm text-gray-600 mt-2">{feedback}</p>}
              </div>
            )
          ))}
          
          {/* Submit or Next Question */}
          <div className="flex justify-between mt-4">
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="bg-[#3b4b41] text-white py-2 px-6 rounded-md hover:bg-[#5a6f65] transition-colors"
                disabled={!isTimerRunning}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-[#3b4b41] text-white py-2 px-6 rounded-md hover:bg-[#5a6f65] transition-colors"
                disabled={!isTimerRunning}
              >
                Submit
              </button>
            )}
          </div>
        </div>

        {/* Result with Animation */}
        {showResult && (
          <motion.div
            className="mt-6 bg-[#e0f7fa] p-4 rounded-lg shadow-lg w-full max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-bold">
              Your Skin Type: {skinType === "Yes" ? "Oily" : "Dry"}
            </h3>
            <p className="text-md">
              Based on your answers, we recommend using {skinType === "Yes" ? "an oil-controlling product!" : "a moisturizing product!"}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;



