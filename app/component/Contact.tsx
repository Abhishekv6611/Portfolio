import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !email.trim() || !gender.trim() || !message.trim()) {
      alert('Please fill all the fields');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    const formData = { name, email, gender, message };

    try {
      const response = await fetch('/api/nodemailer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });      

      if (response.ok) {
        setFeedback('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setGender('');
        setMessage('');
      } else {
        const errorData = await response.json();
        setFeedback(errorData.error || 'Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFeedback('Failed to send your message. Please try again later.');
    }
  };

  return (
    <>
      <h2 className="text-white text-4xl md:mt-20">Contact</h2>
      <div className="bg-gray-400 mt-10" style={{ height: '100vh', width: '90%' }}>
        <div className="flex justify-center items-center py-4 bg-[#f9cdaa] ml-2 mr-2 mt-2">
          <h2 className="text-black text-3xl">Contact Me</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-evenly items-center mt-10 w-full"
        >
          <div className="flex flex-col md:w-1/2 text-lg md:text-2xl">
            <span className="flex items-center mb-10">
              <h2>Main Name:</h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white border p-2 ml-1"
                aria-label="Name"
              />
            </span>
            <span className="flex items-center mb-10 ml-6">
              <h2>Email:</h2>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border p-2 ml-1"
                aria-label="Email"
              />
            </span>
            <span className="flex items-center mb-10 ml-4">
              <h2>Human?</h2>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-white border p-2 ml-1"
                aria-label="Gender"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </span>
          </div>
          <div className="md:w-1/4 md:-ml-90 md:mt-0">
            <span className="flex flex-col">
              <h2 className="text-2xl">Message</h2>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white p-3"
                rows={10}
                cols={40}
                aria-label="Message"
              ></textarea>
              <div className="-mt-25 ml-52 md:ml-0 md:mt-0">
                <button
                  type="submit"
                  className="ml-10 mt-10 border bg-[#0C3DFB] max-w-30 p-3 hover:bg-blue-600 text-white border-blue-700 text-2xl"
                >
                  Send
                </button>
              </div>
            </span>
          </div>
        </form>
        {feedback && (
          <div className="text-center mt-4">
            <p className="text-lg text-white">{feedback}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;