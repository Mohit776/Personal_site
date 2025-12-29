import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaCopy, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  const [copyStatus, setCopyStatus] = useState({ email: false, phone: false });

  const contactInfo = {
    email: 'mohitaggarwal551@gmail.com',
    phone: '+91 9205394233',
    resumeUrl: '/resume/Mohit_Resume.pdf'
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Mohit776', name: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/mohitaggarwal551', name: 'LinkedIn' },
    { icon: <IoLogoInstagram />, url: 'https://www.instagram.com/mohit___551/', name: 'Instagram' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/u/mohit551/', name: 'LeetCode' }
  ];

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopyStatus({ ...copyStatus, [type]: true });
    setTimeout(() => setCopyStatus({ ...copyStatus, [type]: false }), 2000);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = contactInfo.resumeUrl;
    link.download = 'Mohit_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    < section id='contact'>

      <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Me</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-purple-400" />
                  <span>{contactInfo.email}</span>
                  <button
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="ml-2 p-1 rounded hover:bg-gray-700 transition-colors cursor-pointer"
                    aria-label="Copy email"
                  >
                    <FaCopy className="text-sm" />
                  </button>
                  {copyStatus.email && <span className="text-xs text-green-400">Copied!</span>}
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-purple-400" />
                  <span>{contactInfo.phone}</span>
                  <button
                    onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                    className="ml-2 p-1 rounded hover:bg-gray-700 transition-colors cursor-pointer"
                    aria-label="Copy phone number"
                  >
                    <FaCopy className="text-sm" />
                  </button>
                  {copyStatus.phone && <span className="text-xs text-green-400">Copied!</span>}
                </div>
              </div>
              <button
                onClick={downloadResume}
                className="flex cursor-pointer items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <FaFileDownload />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors"
                    aria-label={link.name}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="hidden sm:inline">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Mohit Aggarwal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;