import React, { useState } from 'react';

const FAQ = () => {
  // State to track which question is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to handle opening/closing of answers
  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the currently opened question
    } else {
      setActiveIndex(index); // Open the selected question
    }
  };

  // List of questions and answers (add your FAQ content here)
  const faqData = [
    {
      question: "What is the AI Interview Model?",
      answer: "The AI Interview Model is an advanced platform powered by the Gemini API that simulates real HR interviews to help users prepare for real-world scenarios."
    },
    {
      question: "How does the AI determine questions?",
      answer: "Our AI uses machine learning algorithms to generate HR-related questions based on your role, experience level, and input parameters."
    },
    {
      question: "Can I receive feedback after the interview?",
      answer: "Yes, the platform provides detailed performance analytics and feedback after each interview simulation."
    }
  ];

  return (
    <div className="min-h-screen bg-E7E7E7 text-333333 px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      </div>
      
      <div className="space-y-6 max-w-2xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-252525 pb-4">
            {/* Question */}
            <h2
              onClick={() => toggleAnswer(index)}
              className="cursor-pointer text-2xl font-semibold flex justify-between items-center"
            >
              {item.question}
              <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </h2>
            
            {/* Answer (collapsible with animation) */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="mt-4 text-lg text-333333">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
