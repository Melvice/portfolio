import React from 'react'
// import images
import poly from '../assets/ecole-poly.jpeg'
import maisonneuve from '../assets/maisonneuve.jpg'
//programing languages icons
import python from '../assets/programming/Python.png'
import java from '../assets/programming/Java.png'
import javascript from '../assets/programming/JavaScript.png'
import html from '../assets/programming/html.png'
import css from '../assets/programming/css.png'
import cPlusPlus from '../assets/programming/C++.png'
import sql from '../assets/programming/Sql.png'
//frameworks icons
import react from '../assets/framework/React-icon 1.png'
import node from '../assets/framework/NodeJs.png'
import mongo from '../assets/framework/mongodb.png'
import angular from '../assets/framework/angular.png'
//tools icons
import git from '../assets/tools/Git.png'
import github from '../assets/tools/github.png'
import vscode from '../assets/tools/VSCode.png'
import figma from '../assets/tools/Figma.png'
import visualStudio from '../assets/tools/VisualStudio.png'
import pgadmin from '../assets/tools/postgresql.png'
import gitlab from '../assets/tools/gitlab-original.png'
// video

const Formation  = () => {
    return (
      <div className='section bgFormation' id = 'formation'>
        <div className='circ bg-black/50'></div>
        <div className='container mx-auto'>
          <div className='radiant-1'></div>
          <div>
            <div className='flex-1 text-center font-secondary lg:text-left mb-14'>
              <div className='flex-1 text-center font-secondary lg:text-left'>
                <h2 className='h2 title'> Formation</h2> 
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
              {/*cards*/}
              <div className='formationUI '>
                <div className="flex flex-1"> 
                  <div class="article-card ml-4 ">
                    <div class="content">
                      <p class="date">Jan 2021 — Jan 2025</p>
                      <p class="title">Bachelor in Software Engineering</p>
                      <p class="title">Polytechnic Montreal</p>
                    </div>
                    <img src={poly} alt="polytechnic" />
                  </div>
                  <div class="article-card ml-4">
                    <div class="content">
                      <p class="date">Aug 2018 — Dec 2020</p>
                      <p class="title">Natural science enriched course</p>
                      <p class="title">Cegep Maisonneuve</p>
                    </div>
                    <img src={maisonneuve} alt="Maisonneuve" />
                  </div>
                </div>
                <div class="circle "></div>
              </div>
              {/* Skills*/}
              <div className='flex-1 text-center font-secondary lg:text-left '>
                <h2 className='title h2'> Skills</h2>
                    <div className='flex flex-1 flex-wrap justify-between'>
                      <div class="skill-card mb-4 px-8">
                        <span><i aria-hidden="true"></i></span>
                          <div className="flex flex-col logo"><strong>Programming Languages:</strong>&nbsp;&nbsp;
                            {/*progamming languages icons */}
                            <img src={python} alt="python" className='ml-2 '/>
                            <img src={java} alt="java" className='ml-2' />
                            <img src={javascript} alt="javascript" className='ml-2'/>
                            <img src={html} alt="html" className='ml-2'/>
                            <img src={css} alt="css" className='ml-2'/>
                            <img src={cPlusPlus} alt="c++" className='ml-2'/>
                            <img src={sql} alt="SQL" className='ml-2'/><br/>
                        </div>
                      </div>
                      <div class="skill-card mb-4 px-8">
                        <span><i aria-hidden=""></i></span>
                        <div className=" flex flex-col logo"><strong>Frameworks:</strong>&nbsp;&nbsp;
                            {/*Frameworks */}
                            <img src={react} alt="react" className='ml-2 '/>
                            <img src={node} alt="node" className='ml-2 '/>
                            <img src={mongo} alt="mongo" className='ml-2 '/>
                            <img src={angular} alt="angular" className='ml-2 '/>
                        </div>
                      </div>
                      <div class="skill-card mb-4 px-8">
                        <span><i aria-hidden=""></i></span>
                        <div className=" flex flex-col flex-1 logo"><strong>Tools:</strong>&nbsp;&nbsp;
                            {/*progamming languages icons */}
                            <img src={git} alt="git" className='ml-2 '/>
                            <img src={github} alt="github" className='ml-2' />
                            <img src={vscode} alt="vscode" className='ml-2'/>
                            <img src={figma} alt="figma" className='ml-2'/>
                            <img src={visualStudio} alt="visualStudio" className='ml-2'/>
                            <img src={pgadmin} alt="pgadmin" className='ml-2'/>
                            <img src={gitlab} alt="gitlab" className='ml-2'/><br/>
                        </div>
                      </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Formation;