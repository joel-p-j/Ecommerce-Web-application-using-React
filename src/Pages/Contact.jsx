import React from 'react'

const Contact = () => {
  const handleMessage=()=>{
    alert('Message was successfully Sented')
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-12 text-center">
        Contact Us
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 flex flex-col justify-center hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Have questions or feedback? We’d love to hear from you! Fill out the
            form or reach us directly using the details below.
          </p>

          <div className="space-y-4 text-gray-700 text-lg">
            <p>📍 <strong>Address:</strong> 123, Kollam, Kerala</p>
            <p>📞 <strong>Phone:</strong> +91 7561066090</p>
            <p>✉️ <strong>Email:</strong> joelpjoseph3@gmail.com</p>
          </div>
        </div>

        <form className="bg-white shadow-xl rounded-2xl p-8 md:p-10 flex flex-col gap-5 hover:shadow-2xl transition-shadow duration-300">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          ></textarea>

          <button onClick={handleMessage}
            type="submit"
            className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
