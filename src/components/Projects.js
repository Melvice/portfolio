import React from 'react'
// project list
import projectList  from '../assets/projects/projects'
const Projects  = () => {
    return (
      <div className='section bg-project' id = 'projects'>
        <div className='container mx-auto'>
          <div className='radiant-1'></div>
          <div>
            <div className='flex-1 text-center font-secondary lg:text-left mb-14'>
              <h2 className='h2 title'> Projects</h2>
              <p className="mb-8">Here are some of my recent projects.</p>
              <div className='flex flex-1 flex-wrap justify-between'>
                {/*card*/}
                {/* <div className='flex flex-1'>
                  <div class = "project-card">
                  <img className='project-image' src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
                    <div class="card-content">
                      <h2 className='project-title'>
                        Card Heading
                      </h2>
                      <p className='project-desc'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                      </p>
                      <a href="#" className="link">
                        View Project 
                        <span class="material-symbols-outlined">
                          arrow_right_alt
                        </span>
                      </a>
                    </div>
                  </div>
                </div> */}
              
                {/*map throught projectList */}

                {projectList.map((project) => {
                  const {id, title, desc, image, link} = project;
                  return (
                    <div class = "project-card" key={id}>
                  <img className='project-image' src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
                    <div class="card-content">
                      <h2 className='project-title'>
                        {title}
                      </h2>
                      <p className='project-desc'>
                        {desc}
                      </p>
                      <a href="#" className="link">
                        View Project 
                        <span class="material-symbols-outlined">
                          arrow_right_alt
                        </span>
                      </a>
                    </div>
                  </div>
                    // <div className='card' key={id}>
                    //   {/** */}
                      
                    //   {/** */}
                    //   <div className='card-layout '>
                    //     <img src={image} className='image ml-6 '/>
                    //     <div className='mt-6'>
                    //       <h3 className='subtitle'>{title}</h3>
                    //       <p className='desc'>{desc}</p>
                    //       <a href={link} className='btn btn:lg'>View Project</a>
                    //     </div>
                    //   </div>
                    // </div>
                    )})}
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Projects;