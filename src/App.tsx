import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Parallax from './components/Parallax';
import './styles/main.scss';
import image from './images/mathew.png';
import About from './containers/AboutContainer';
import Projects from './containers/ProjectContainer';
import './styles/resume.scss';
import Contact from './containers/ContactContainer';
import Education from './containers/EducationContainer';
import Experience from './containers/ExperienceContainer';
import Skills from './containers/SkillsContainer';

const App = () => {
    const [ width, setWidth ] = useState(window.innerWidth);

    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return (
        <div className="MainContent">
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
            <About />
            <Projects />
            <div className="ResumeHeader">
                <h1>
                    My Resume
                </h1>
            </div>
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
                <div className="sideBySide">

                    {/* the contact and professional summary */}
                    <div className="right">
                        <Contact />
                        <div className="ProfessionalSummary">
                            <h2>
                                Professional Summary
                            </h2>
                            <p>Experienced Web Developer adept in all stages of advanced web development. 
                                Knowledgable in user interface, testing, and debugging processes. 
                                Bringing forth expertise in the design, installation, testing, and maintenance of web systems. 
                                Equipped with a diverse and promising skill set. Proficient in an assortment of technologies, 
                                including JavaScript, CSS, HTML, React, and Redux. Able to effectively self-manage during independant projects, 
                                as well as collaborate in a team setting.</p>
                        </div>
                        { width > 500 ? <Skills /> : null }
                    </div>

                    {/* main resume content */}
                    <div className="left">
                        <Experience />
                        <Education />
                        { width <= 500 ? <Skills /> : null }
                    </div>

                </div>
            </div>
        </div>
    );
}

createRoot(document.querySelector('.App')!).render(<App />);