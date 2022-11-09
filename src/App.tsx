import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Component imports
import Parallax from './components/Parallax';
import Container from './components/Container';
import AboutItem from './components/AboutItem';
import SkillItem from './components/SkillItem';
import ResumeItem from './components/ResumeItem';
import ProjectItem from './components/ProjectItem';
import ContactItem from './components/ContactItem';

// Data imports
import about from './data/about';
import skills from './data/skills';
import projects from './data/projects';
import contacts from './data/contact';
import educations from './data/education';
import experiences from './data/experience';

// Image imports
import image from './images/mathew.png';

// Style imports
import './styles/main.scss';
import './styles/resume.scss';

const App = () => {
    const [ width, setWidth ] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    
    return (
        <div className="MainContent">

            {/* Landing parallax */}
            <Parallax background={image} contentClassName='ParallaxHeader' >
                <div className="Text">
                    <h1>
                        Hello,
                    </h1>
                    <h2>
                        I'm Mathew.
                    </h2>
                </div>
            </Parallax>

            {/* About */}
            <Container header='About Me' className='AboutContainer'>
                <div className="AboutItems">
                    { about.map((item, i) => (
                        <AboutItem key={i} icon={item.icon} title={item.title} />
                    )) }
                </div>
            </Container>

            {/* Projects */}
            <Container header='Projects' className='ProjectsContainer'>
                <div className="ProjectList">
                    { projects.map((project, i) => (
                        <ProjectItem key={i} title={project.title} desc={project.desc} image={project.image} imageAlt={project.imageAlt} link={ project.link } />
                    )) }
                </div>
            </Container>

            {/* Resume section header */}
            <div className="ResumeHeader">
                <h1>
                    My Resume
                </h1>
            </div>

            {/* Resume header */}
            <div className="Resume">
                <section className="Header">
                    <div className="HeaderContent">
                        <h1>
                            Mathew Hultquist
                        </h1>
                        <hr />
                        <h3>
                            Founder
                        </h3>
                    </div>
                </section>

                {/* Resume Content */}
                <div className="sideBySide">

                    {/* the contact and professional summary */}
                    <div className="right">

                        {/* Contact */}
                        <Container header='Contact'>
                            <div className="Contacts">
                                { contacts.map((contact, i) => (
                                    <ContactItem key={i} icon={contact.icon} title={contact.title} link={contact.link} />
                                ))}
                            </div>
                        </Container>
                        
                        {/* Professional Summary */}
                        <div className="ProfessionalSummary">
                            <h2>
                                Professional Summary
                            </h2>
                            <p>Experienced Web Developer adept in all stages of advanced web development. 
                                Knowledgeable in user interface, testing, and debugging processes. 
                                Bringing forth expertise in the design, installation, testing, and maintenance of web systems. 
                                Equipped with a diverse and promising skill set. Proficient in an assortment of technologies, including JavaScript, CSS, HTML, React, and Redux. 
                                Able to effectively self-manage during independent projects, as well as collaborate in a team setting.</p>
                        </div>

                        {/* Skills (desktop) */}
                        { width > 500 ? 
                            <Container header='Skills' className='SkillsContainer'>
                                <div className="Skills">
                                    { skills.map((skill, i) => (
                                        <SkillItem key={i} pointer={skill.pointer} space={skill.space} size={skill.size} skill={skill.skill} />
                                    ))}
                                </div>
                            </Container>
                        : null }
                    </div>

                    {/* main resume content */}
                    <div className="left">

                        {/* Experience */}
                        <Container header='Experience' className='ExperienceContainer'>
                            <div className="Experience">
                                {experiences.map((experience, i) => (
                                    <ResumeItem key={i} title={experience.title} subTitle={experience.subTitle} content={experience.content} />
                                ))}
                            </div>
                        </Container>

                        {/* Education */}
                        <Container header='Education' className='EducationContainer'>
                            <div className="Education">
                                { educations.map((education, i) => (
                                    <ResumeItem key={i} title={education.title} subTitle={education.subTitle} content={education.content} />
                                ))}
                            </div>
                        </Container>

                        {/* Skills (mobile) */}
                        { width <= 500 ? 
                            <Container header='Skills' className='SkillsContainer'>
                                <div className="Skills">
                                    { skills.map((skill, i) => (
                                        <SkillItem key={i} pointer={skill.pointer} space={skill.space} size={skill.size} skill={skill.skill} />
                                    ))}
                                </div>
                            </Container>
                        : null }
                    </div>
                </div>
            </div>
        </div>
    );
}

createRoot(document.querySelector('.App')!).render(<App />);