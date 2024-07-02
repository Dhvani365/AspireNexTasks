import React from 'react';
import DM_Logo from '../assets/My_image.jpeg';
import CV from '../assets/Dhvani_SDE_CV.pdf';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import './About.css';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section id="about" className="about-section after-left-section scrollSpysection">
      <div className="container-fluid mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="my-3 image-section-abt">
            <div className="img-box">
              <img
                alt="smiling a girl"
                src={DM_Logo}
                loading="lazy"
                width="900"
                height="1099"
                decoding="async"
                data-nimg="1"
                className="about-image"
              />
            </div>
          </div>
          <div className="my-3 text-section-abt">
            <div className="typo-box about-me">
              <h3 className="text-3xl font-bold mb-2">Dhvani Maktuporia</h3>
              <h5 className="text-lg mb-4">
                An <span className="text-theme">🚀 Aspiring Software Engineer</span> based in{' '}
                <span className="text-theme">India</span>
              </h5>
              <p className="mb-4 description-text">
Welcome to my Portfolio Website! 👋 <br/><br/>

I'm a proactive <span className="text-theme">Full Stack Development</span> Enthusiast. With a keen interest in coding and problem-solving, I am dedicated to exploring the realms of web development, AI/ML, and cloud computing. My journey into technology has been shaped by hands-on experience with HTML, CSS, JavaScript, and frameworks like ReactJS, alongside database management in SQL and NoSQL environments. Currently expanding my skills with Next.js, I thrive on creating innovative solutions and am eager to contribute my expertise to impactful projects.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-4 grid-container">
                <div className="media">
                  <span className="font-medium text-theme">E-mail 👩‍💻| </span>
                  dhvanimaktuporia@gmail.com 
                </div>
                <div className="media">
                  <span className="font-medium text-theme">LinkedIn 😎| </span>
                  dhvani-maktuporia-326565222  
                </div>
                <div className="media">
                  <span className="font-medium text-theme">GitHub 👩‍💼| </span>
                  dhvani365
                </div>
                <div className="media">
                  <span className="font-medium text-theme">Website 📎| </span>
                  dhvani365.github.io/my-portfolio-webapp  
                </div>
                <div className="media">
                  <span className="font-medium text-theme">Freelance 💼| </span>
                  Available 
                </div>
              </div>
              <div className="btn-bar">
                <a
                  className="inline-block py-2 px-4 rounded-lg shadow-lg download-btn"
                  href="/resume.png"
                  download={CV}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='about-card-container'>
        <div className='mt-1 lg:ml-20 about-card flex gap-10 sm:ml-5'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(About, "about");