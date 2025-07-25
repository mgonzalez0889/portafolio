import { useState } from "react";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
import { projects } from "../data/projects";

export default function Main() {
    const title = `Hello, I' m`;
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

    const contactWs = (() => {
        window.open("https://wa.me/573015461687?text=Me%20gustaría%20cotizar%20", '_blank')

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
                        <img src="assets/img/about_me.jpg" alt="about_me" />
                    </figure>
                    <div>
                        <h2 className="about__heading">About Me</h2>
                        <p className="about__paragraph">
                        Systems engineer graduated from the Latin American University. Professional focus on the development of web and mobile applications. Advanced skills in: Angular, Node Js, Springboot, AWS, Azure, NestJS, Flutter, Ionic.
                        </p>
                        <p className="about__paragraph">                        
                        I have worked on impactful projects for companies in the Dominican Republic, specifically in online banking. My contributions were both functional and scalable, achieved through best practices.
                        </p>
                        <p className="about__paragraph">                        
                            I have five years of experience in developing applications.
                        </p>
                    </div>
                </div>
            </div>

            <div className="working">
                <div className="working__grid">
                    <div>
                        <h2 className="working__heading">Work Experience</h2>
                        <p>Here’s my experience as a developer</p>
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
                <h2 className="skills__heading">Me Skills</h2>
                <p className="skills__paragraph">Here are some of my skills!</p>
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
                    Challenge
                    <span className="challenge__subheading">Challenge me</span>
                </h2>
            </div>

            <div className="projects" id="projects">
                <h2 className="projects__heading">Projects</h2>
                <p className="projects__paragraph">Here are some projects I have worked on for companies.</p>
                <div className="projects__grid">

                    {project.map((projects) => (
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

            <footer className="footer" id="footer">
                <div className="footer__content contenedor">
                    <h3 className="footer__heading">Let's Create 
                        <span className="footer__subheading">
                            Someting Cool
                        </span>
                    </h3>
                    <button className="footer__action" onClick={contactWs}>Contact me</button>
                    <hr />
                    <div className="footer__contact">
                        <img src="assets/svg/logomijail.svg" alt="Logo footer" />

                        <div className="footer__social">
                            <p className="footer__title">Information:</p>
                            {/* <a className="footer__email" href="mailto:mijail0824@gmail.com">mijail0824@gmail.com</a> */}
                            <div className="footer__networks">
                                <a className="footer__link" href="https://co.linkedin.com/in/mijail-gonzalez-1684a477" target="_blank">
                                    <img src="assets/svg/linkedin.svg" alt="" />
                                </a>
                                <a className="footer__link" href="https://github.com/mgonzalez0889" target="_blank">
                                    <img src="assets/svg/github-outline.svg" alt="" />
                                </a>
                                <a className="footer__link" href="https://twitter.com/migonzalez08"target="_blank">
                                    <img src="assets/svg/x.svg" alt="" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <p className="footer__copy">© 2024  Mijail González Varela</p>

            </footer>
            
        </>

    )



}
