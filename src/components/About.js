import React from 'react';
// CountUp
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
//images 
import robot from '../assets/robotMaster.jpg'
import sport from '../assets/sport.jpg'
import volunteer from '../assets/volunteer.png'



const About  = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // });
    return (
      <div className='section bgAbout' id = 'about' >
       <div className='container mx-auto'>
        <div className='radiant'></div>
          <div>
            {/*text*/}
            <div className='flex-1 text-center font-secondary lg:text-left mb-14'>
              <h2 className='h2 title'> About Me.</h2>
              <h3 className='h3 mb-4 desc-container'> I'm a student at Polytechnic de Montreal studying
                Computer Science and Engineering. I'm a full-stack developer with
                experience in React, Node.js, and MongoDB. I'm also interested in
                machine learning and data science. I'm currently looking for a
                an internship in software development.</h3>
             {/*cards*/}
              <div className='flex flex-1 flex-row gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 justify-between card-container'>
                <div className='card'>
                  <div className='card-layout '>
                    <img src={robot} className='image ml-6 '/> 
                    <div className='mt-6'>
                      <h3 className='subtitle'>Member of Polystar</h3>
                      <p className='desc'>description</p>
                    </div>
                  </div>
                </div> 
                <div className='card'>
                  <div className='card-layout '>
                    <img src={sport} className=' image ml-6 '/> 
                    <div className='mt-6'>
                      <h3 className='subtitle'>Sport Addict</h3>
                      <p className='desc'>description</p>
                    </div>
                  </div>
                </div> 
                <div className='card'>
                  <div className='card-layout'>
                    <img src={volunteer} className='image ml-6 '/> 
                    <div className='mt-6'>
                      <h3 className='subtitle'>Socially involved</h3>
                      <p className='desc'>description</p>
                    </div>
                  </div>
                </div> 
                {/* <div className='card'>
                  <div className='card-layout '>
                    <img src={robot} className='image ml-6 '/> 
                    <div className='mt-6'>
                      <h3 className='subtitle'>Membre de Polystar</h3>
                      <p className='desc'>description</p>
                    </div>
                  </div>
                </div>  */}
            </div>
           </div>
            </div>
       </div>
      </div>
    )
}

export default About;