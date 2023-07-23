import React from 'react'
// project list
import projectList  from '../assets/projects/projects'
const Projects  = () => {
    return (
      <div className='section bg-project' id = 'projects'>
        <div className='container mx-auto'>
          <div className='radiant-1'></div>
            <div className='theme bg-black/50'></div>
          <div>
            <div className='flex-1 text-center font-secondary lg:text-left mb-14'>
              <h2 className='h2 title'> Projects</h2>
              <p className="mb-8">Here are some of my projects.</p>
              <div className='flex flex-1 flex-wrap justify-between'>
                {/*card*/}
                {projectList.map((project) => {
                  const {id, title, desc, image, link} = project;
                  return (
                    <div class = "project-card" key={id}>
                      <div className='circle'></div>
                      <img className='project-image' src= {image} alt=""/>
                        <div class="card-content">
                          <h2 className='project-title'>
                            {title}
                          </h2>
                          <p className='project-desc'>
                            {desc}
                          </p>
                          <a href= {link} className="link" target="_blank">
                            View Project 
                            <span class="material-symbols-outlined">
                              arrow_right_alt
                            </span>
                          </a>
                    </div>
                  </div>
                    )})}
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Projects;