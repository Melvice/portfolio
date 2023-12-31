import React from 'react'
//images 
import image from '../assets/melviceProfile.jpg'
//icons 
import {FaGithub, FaLinkedinIn } from 'react-icons/fa'
// type animation
import {TypeAnimation} from 'react-type-animation';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn, variants} from '../variants'
import { Link } from 'react-scroll';

const Banner  = () => {
    return (
      <div className='min-h-[100vh] lg:min-h-[95vh] flex items-center bgBanner' id = 'home'>
        {/* background square*/}
        <div className='absolute inset-0 bg-black/50 z-[-1] back'>
          </div>
        <div className='homeUI  backdrop:blur-2xl px-8'>
        <div className='container mx-auto '>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
            {/**text */}
            <div className='flex-1 text-center font-secondary lg:text-left mb-14'> 
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[36px] font-bold leading-[0.9] lg:text-[80px] name'>
              MELVICE JUNIOR
              <span className='name'> GUIMFACK </span>
              </motion.h1>
              <motion.div 
              variants={fadeIn('up', 0.4)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-6 text-[36px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]'>
                <span className='text-white'> I am </span>
                <TypeAnimation
                  cursor = {false}
                  sequence = {[
                    'a Developer',
                    2000,
                    'an Engineering Student',
                    2000
                  ]}
                  speed={50}
                  className='red'
                  wrapper='span'
                  repeat={Infinity}
                />
              </motion.div>
              <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                  <Link  
                    to='contact'
                    className='btn'
                    smooth = {true}
                    spy = {true}
                    offset={0}  
                  > Contact me</Link>
                <a href='#' className='red btn-link'> My portfolio</a>
              </motion.div>
              {/**socials*/}
              <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='https://github.com/Melvice'
                  target='_blank'>
                  <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/melvice-guimfack-b91433221/' target='_blank'>
                  <FaLinkedinIn/>
                </a>
                </motion.div>
              </div>
            {/**image */}
           <motion.div 
              variants={fadeIn('down', 0.5)} 
              initial='hidden' 
              whileInView={'show'} 
              className='hidden lg:flex flex-1 max-w-[800px] lg:max-w-[900px] img'> 
              <img src={image} alt='avatar' className='portrait'/>        
          </motion.div>
          </div> 
          
        </div>
        </div>
      </div>
    )
}

export default Banner;