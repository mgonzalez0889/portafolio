import { useState } from "react";
import { experience } from "../data/experience";
import { skills } from "../data/skills";

export default function Main() {
    const title = `Hello, I' m Mijail Gonzalez`;
    const subtitle = `Full-stack creative developer, from barranquilla - colombia`;
    const buttonTitle = `Contact me`;
    const mainTitle = `Fullstack Developer`;

    const [exp, setExp] = useState(experience);
    const [skill, setSkill] = useState(skills);


    return (


        <>
        
            <div className="heading">
                <a className="heading__main">{mainTitle}</a>
                <h1 className="heading__title">{title}</h1>
                <p className="heading__paragraph">{subtitle}</p>
                <button className="heading__action">{buttonTitle}</button>
            </div>
            
            <div className="about contenedor">
                <div className="about__grid">
                    <figure className="about__image">
                        <img src="/src/assets/img/about_me.jpg" alt="about_me" />
                    </figure>
                    <div>
                        <h2 className="about__heading">About Me</h2>
                        <p className="about__paragraph">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, incidunt debitis. Repellendus quae beatae id deleniti debitis sint sed ut. Quas reprehenderit alias exercitationem enim a odio tempore assumenda tempora!
                        </p>
                    </div>
                </div>
            </div>

            <div className="working">
                <div className="working__grid">
                    <div>
                        <h2 className="working__heading">Work Experience</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis aut accusamus mollitia debitis, repudiandae ea minima obcaecati totam earum reprehenderit. Incidunt vero labore sequi corporis dignissimos, non nihil! Repellat!</p>
                    </div>     
                    <div>
                        {exp.map((experience) => (

                        <div className="card">
                            <img src="/src/assets/svg/company.svg" alt="Imagen" />
                            <div className="card__content">

                                <p className="card__subtitle">{experience.subtitle}</p>                                
                                <h3 className="card__title">
                                    {experience.title}
                                </h3>
                                <span className="card__location">{experience.location}</span>
                            </div>
                            <a className="card__time" href="#">{experience.date}</a>
                        </div>

                        ))}
                    </div>              
                </div>
            </div>

            <div className="skills">
                <h2 className="skills__heading">Me Skills</h2>
                <p className="skills__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus autem quibusdam labore minus eaque odit, dolore dolor harum nulla tempora illum necessitatibus nobis error quisquam voluptatem porro saepe laboriosam!</p>
                <div className="skills__grid">
                    {skill.map((skill) => (
                        <div className="skill__card">
                            <figure>
                                <img src={`/src/assets/svg/${skill.image}.svg`} alt="" />
                            </figure>
                            <p className="skill__content">{skill.title}</p>                        
                            <figure>
                                <img src={`/src/assets/img/${skill.level}.png`} alt="" />
                                {/* <span className="skill__grade">Alto</span> */}
                            </figure>
                        </div>                   

                    ))}
                </div>
            </div>
            
        </>

    )



}