import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

export class About extends PureComponent {
  render() {
    return (
      <div className="flex flex-col min-h-screen bg-E7E7E7 text-333333 px-8 py-16">
        {/* Header */}
       

        {/* Section 2: Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8 text-333333">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-252525 p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold text-E7E7E7">Tailored Questions</h3>
              <p className="mt-2 text-E7E7E7">Receive HR questions personalized for your role and experience level.</p>
            </div>
            <div className="bg-252525 p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold text-E7E7E7">Performance Feedback</h3>
              <p className="mt-2 text-E7E7E7">Get detailed feedback to improve your interview skills and responses.</p>
            </div>
            <div className="bg-252525 p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold text-E7E7E7">Real-Time Simulation</h3>
              <p className="mt-2 text-E7E7E7">Experience interactive interview simulations to prepare for real-life scenarios.</p>
            </div>
            <div className="bg-252525 p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-bold text-E7E7E7">Custom Feedback</h3>
              <p className="mt-2 text-E7E7E7">Receive personalized feedback based on your performance and strengths.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-333333">Ready to Ace Your Next Interview?</h2>
          <p className="mt-4 mb-8 text-333333">Prepare smarter with personalized AI tools designed to help you succeed.</p>
          <Link to="/startinterview">
            <button className="bg-000000 text-E7E7E7 px-8 py-4 rounded-full hover:bg-252525">
              Start Preparing Now
            </button>
          </Link>
        </section>
        <footer className="w-full py-4 bg-white text-black text-center mt-auto">
          <p className="text-sm" style={{ fontFamily: 'CP Roaman 3, sans-serif' }}>
            © 2024 HackthisFall Virtual
          </p>
        </footer>
       
      </div>
    )
  }
}

export default About
