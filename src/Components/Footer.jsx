import React from 'react'
import { FaInstagram, FaYoutube, FaDiscord, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 max-w-7xl mx-auto">
        
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold text-purple-400">Follow Us</h3>
          <ul className="flex flex-col gap-3 text-lg">
            <li className="flex items-center gap-3 hover:text-purple-400 transition-colors cursor-pointer">
              <FaXTwitter /> X (Twitter)
            </li>
            <li className="flex items-center gap-3 hover:text-purple-400 transition-colors cursor-pointer">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-3 hover:text-purple-400 transition-colors cursor-pointer">
              <FaYoutube /> YouTube
            </li>
            <li className="flex items-center gap-3 hover:text-purple-400 transition-colors cursor-pointer">
              <FaDiscord /> Discord
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold text-purple-400">Reach Out To Us</h3>
          <div className="text-lg space-y-2">
            <p className="hover:text-purple-300 transition-colors">
              📞 +91 75610 66090
            </p>
            <p className="hover:text-purple-300 transition-colors underline cursor-pointer">
              📧 joelpjoseph3@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Joel P Joseph. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
