import React from 'react';
import { motion } from 'framer-motion';
import Threads from '../assets/Thread.jsx';
import ProfileCard from '../assets/ProfileCard.jsx'
import ProfilePhoto from "../assets/Photo.png";

const About = () => {
  const timelineData = [
    {
      year: "B.Tech, Computer science",
  
      description: "Dr. Akhilesh Das Gupta Institute of Profressional Studies, New Delhi"
    },
    {
      year: "Web Developer",
   
      description: "Specialized in full-stack development with expertise in React.js, Node.js, and modern web technologies."
    },
    {
      year: "Software Engineer",

      description: " Implemented responsive designs, optimized application performance."
    },
    
  ];

  return (
    <>
      <div className='bg-gray-950 min-h-screen'>
        <div 
          className='text-6xl text-center py-8 relative'
          style={{ 
            fontFamily: "'Yatra One', cursive",
            background: "linear-gradient(45deg, #FF6EC4, #7873F5, #4ADE80, #22D3EE, #FACC15)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
            animation: "gradient 5s linear infinite",
          }}
        >
          About Me
          <div 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-48"
            style={{
              background: "linear-gradient(45deg, #FF6EC4, #7873F5, #4ADE80, #22D3EE, #FACC15)",
              backgroundSize: "200% auto",
              animation: "gradient 5s linear infinite",
            }}
          />
        </div>

        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}</style>
        
        <div className='flex'>
        <div className='flex justify-between mx-32 mt-20'>
       
          <ProfileCard
            name="Mohit Aggarwal"
            title="Software Engineer, Web Developer"
            handle="Mohit551"
            status="Online"
            contactText="Contact Me"
            avatarUrl={ProfilePhoto}
            miniAvatarUrl={ProfilePhoto}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>

        <div className='timeline relative mx-auto mt-36 px-4'>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='flex mb-8 relative'
            >
              {/* Timeline Line */}
              <div className='absolute left-[7px] top-0 h-full w-[2px] bg-amber-400'></div>
              
              {/* Timeline Dot */}
              <div className='w-4 h-4 rounded-full bg-amber-400 z-10'></div>
              
              {/* Content */}
              <div className='ml-8'>
                <div className='flex items-baseline'>
                  <span className='text-amber-400 text-lg font-bold'    style={{ fontFamily: "'Yatra One', cursive" }}>{item.year}</span>
                  <h3 className='text-white text-xl font-bold ml-4'>{item.title}</h3>
                </div>
                <p className='text-gray-400 text-sm mt-1'>{item.company}</p>
                <p className='text-gray-300 mt-2'>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div></div>
      </div>
    </>
  );
};

export default About;