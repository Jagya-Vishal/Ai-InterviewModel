import React, { PureComponent } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export class StartInterview extends PureComponent {
  handleRedirect = () => {
    window.location.href = 'http://localhost:3000'; // Redirect to localhost
  };

  render() {
    return (
      <div className="min-h-screen bg-E7E7E7 flex flex-col justify-between text-center px-4">
        <div className="flex flex-col justify-center items-center flex-grow">
          {/* Large Heading Text */}
          <h1 className="text-5xl md:text-6xl font-bold text-333333 mb-6 animate-fade-in">
            <span style={{ fontFamily: 'Comic Neue, sans-serif' }}>
              Last Minute Prep
            </span> <br />
            <span style={{ fontFamily: 'Lexend Exa, sans-serif' }}>
              with your <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Virtual</span> HR
            </span>
          </h1>

          {/* Dot Separator */}
          <div className="text-3xl text-333333 mb-6 animate-fade-in">
            •
          </div>

          {/* Small Text */}
          <p className="text-lg text-333333 mb-10 animate-slide-up">
            Free to try. AI-driven mock interviews. <br />
            Personalized feedback. Ready to ace your next job!
          </p>

          {/* Hover Button with Icon */}
          <button
            onClick={this.handleRedirect}
            className="flex items-center justify-center bg-000000 text-E7E7E7 text-lg px-8 py-4 rounded-full hover:bg-E7E7E7 hover:text-000000 transition-all duration-300 transform hover:scale-105 animate-bounce-in"
          >
            Start Interview <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Footer */}
        <footer className="w-full py-4 bg-white text-black text-center mt-auto">
          <p className="text-sm" style={{ fontFamily: 'CP Roaman 3, sans-serif' }}>
            © 2024 HackthisFall Virtual
          </p>
        </footer>
      </div>
    );
  }
}

export default StartInterview;
