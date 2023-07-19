import React from 'react';
// CountUp
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn, variants } from '../variants';

const About  = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
    return (
      <div className='section bgAbout' id = 'about' ref={ref}>
       <div className='container mx-auto'>
          <div>
            {/*img*/}
            
              </div>
       </div>
      </div>
    )
}

export default About;