import React from "react";
//images
import robot from "../assets/robotMaster.jpg";
import stingray from "../assets/stingray-logo.jpg";
import volunteer from "../assets/volunteer.png";

const About = () => {
  return (
    <div className="section bgAbout" id="about">
      <div className="container mx-auto">
        <div className="radiant"></div>
        <div>
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left mb-14">
            <h2 className="h2 title"> About Me.</h2>
            <h3 className="h3 mb-16 desc-container">
              I'm an Engineering student at Polytechnic de Montreal. Proficient
              in React, c++, Javascript, Angular and more. I offer adaptability,
              collaborative spirit, problem-solving aptitude, and a passion for
              user experience. Seeking a software development internship to
              contribute innovative solutions to your team.
            </h3>
            {/*cards*/}
            <div className="flex flex-1 flex-row gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 justify-between card-container">
              <div class="cards">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner">
                  <img src={robot} className="image ml-6 " />
                  <div className="mt-6">
                    <h3 className="subtitle">Member of Polystar</h3>
                    <p className="desc">
                      Develop useful functionalities for competition robots
                      using C++
                    </p>
                  </div>
                </div>
              </div>
              <div class="cards">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner">
                  <img src={stingray} className="image ml-6 " />
                  <div className="mt-6">
                    <h3 className="subtitle mb-12">
                      Full-stack Developer intern @Stingray
                    </h3>
                    <p className="desc">
                     - Build a scalable and performant SaaS application with Ruby
                      on Rails, React/Redux and JQuery, Python, PostgreSQL, and
                      Amazon Web Services. 
                    </p>
                    <p className="desc">
                     &nbsp;
                      - Work with developers to design, plan,
                      prioritize, and implement new features to the platform.
                    </p>
                  </div>
                </div>
              </div>
              <div class="cards">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner">
                  <img src={volunteer} className="image ml-6 " />
                  <div className="mt-6">
                    <h3 className="subtitle">Socially involved</h3>
                    <p className="desc">
                      Lots of volunteer experience :
                      <ul>
                        <li> - Volunteer at the CHUM</li>
                        <li> - Volunteer at the CLSC</li>
                        <li>
                          {" "}
                          - Volunteer at the Saint Vincent De Paul society
                        </li>
                        <li> - Volunteer at the Pierre-Joseph-Triest CHSLD</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
