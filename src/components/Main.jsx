import { useState } from "react";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import Footer from "./Footer";

export default function Main() {
    const title = `Hello, I'm`;
    const name = `Mijail González Varela`;
    const subtitle = `Full-stack developer, from Barranquilla - Colombia`;
    const buttonTitle = `Contact me`;
    const mainTitle = `Fullstack Developer`;

    const [exp, setExp] = useState(experience);
    const [skill, setSkill] = useState(skills);
    const [project, setProject] = useState(projects);

    const contactMe = (() => {
        window.location.href = '#footer'
    })

    return (
        <>        
            <div className="heading">
                <a className="heading__main">{mainTitle}</a>
                <h1 className="heading__title"> 
                        {title}
                    <span className="heading__subheading">
                        {name}
                    </span> 
                </h1>
                <p className="heading__paragraph">{subtitle}</p>
                <button className="heading__action" onClick={contactMe}>{buttonTitle}</button>
                <video
                     className="heading__media"
                      muted
                      autoPlay                    
                      playsInline
                      loop
                      src="assets/media/videomija.mp4"
                ></video>
            </div>
            
            <div className="about contenedor" id="about">
                <div className="about__grid">
                    <figure className="about__image">
                        <img src="assets/img/profile.png" alt="about_me" />
                    </figure>
                    <div>
                        <h2 className="about__heading">About Me</h2>
                        <p className="about__paragraph">
                            Systems Engineer with 7+ years of experience building end-to-end enterprise solutions across frontend and backend, in industries such 
                            as finance, mobility and commerce. Specialized in Angular, Ionic and React, with backend experience in Java, Spring Boot, Node.js and 
                            NestJS, and cloud services on AWS. 
                        </p>
                        <p className="about__paragraph">                        
                            I have developed mobile apps with Ionic Angular for Android and iOS and web applications with 
                            Angular and React, led Angular migrations and driven microfrontend architectures that sped up feature delivery. I adapt easily to each 
                            business and build stable, scalable, maintainable applications.
                        </p>                        
                        <p className="about__paragraph">                        
                            Applying SOLID, Clean Code and unit testing, and integrating AI tools into 
                            my development workflow with sound technical judgment.
                        </p>                        
                    </div>
                </div>
            </div>

            <div className="working">
                <div className="working__grid">
                    <div>
                        <h2 className="working__heading">Work Experience</h2>
                        <p>Professional journey and key achievements</p>
                    </div>     
                    <div>
                        {exp.map((experience) => (

                        <div className="card">
                            <img src="assets/svg/company.svg" alt="Imagen" />
                            <div className="card__content">

                                <p className="card__subtitle">{experience.subtitle}</p>                                
                                <h3 className="card__title">
                                    {experience.title}
                                </h3>
                                <span className="card__location">{experience.location}</span>
                            </div>
                            <a className="card__time">{experience.date}</a>
                        </div>

                        ))}
                    </div>              
                </div>
            </div>

            <div className="skills">
                <h2 className="skills__heading">Technical Skills</h2>
                <p className="skills__paragraph">Technologies and tools I specialize in</p>
                <div className="skills__grid">
                    {skill.map((skill) => (
                        <div className="skill__card">
                            <figure>
                                <img src={`assets/svg/${skill.image}.svg`} alt="" />
                            </figure>
                            <p className="skill__content">{skill.title}</p>                                                   
                        </div>                   

                    ))}
                </div>
            </div>

            <div className="challenge">
                <h2 className="challenge__heading">
                    Ready for New Challenges
                    <span className="challenge__subheading">Let's Build Something Amazing</span>
                </h2>
            </div>

            <div className="projects" id="projects">
                <h2 className="projects__heading">Featured Projects</h2>
                <p className="projects__paragraph">Showcasing innovative solutions developed for industry-leading companies</p>
                <div className="projects__grid">

                    {[...project].reverse().map((projects) => (
                        <div className="project__card">
                            <figure className="project__image">
                                <img src={`assets/svg/${projects.img}.svg`} alt="" />
                            </figure>
                            <h4 className="project__title">{projects.title}</h4>
                            <p className="project__paragraph">{projects.description}</p>
                            <a className="project__action" href={`${projects.visit}`} target="_blank">Go</a>
                        </div>
                    ))}

                </div>
            </div>
            <Footer />                        
        </>

    )



}
