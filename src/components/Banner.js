import React from 'react';
// Images
import image from '../assets/melviceProfile.jpg';
// Icons
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// Type animation
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
// React Spring
import { useSpring, animated } from 'react-spring';

const Banner = () => {
  // Define the animation for the text
  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: 700 }, // Customize the animation duration
  });

  // Define the animation for the image
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: 700 }, // Customize the animation duration
  });

  return (
    <div className="min-h-[100vh] lg:min-h-[95vh] flex items-center bgBanner" id="home">
      {/* Background square */}
      <div className="absolute inset-0 bg-black/50 z-[-1] back"></div>
      <div className="homeUI backdrop:blur-2xl px-8">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            {/* Text */}
            <animated.div className="flex-1 text-center font-secondary lg:text-left mb-14" style={textAnimation}>
              <h1 className="text-[36px] font-bold leading-[0.9] lg:text-[80px] name">
                MELVICE JUNIOR<span className="name"> GUIMFACK </span>
              </h1>
              <div className="mb-6 text-[36px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]">
                <span className="text-white"> I am </span>
                <TypeAnimation
                  cursor={false}
                  sequence={["a Developer", 2000, "an Engineering Student", 2000]}
                  speed={50}
                  className="red"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
              <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                <Link to="contact" className="btn" smooth={true} spy={true} offset={0}>
                  Contact me
                </Link>
                <a href="#" className="red btn-link">My portfolio</a> {/* Consider providing a valid link or using client-side routing here */}
              </div>
              {/* Socials */}
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="https://github.com/Melvice" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/melvice-jr-guimfack-b91433221/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>
            </animated.div>
            {/* Image */}
            <animated.div className="hidden lg:flex flex-1 max-w-[800px] lg:max-w-[900px] img" style={imageAnimation}>
              <img src={image} alt="avatar" className="portrait" />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
