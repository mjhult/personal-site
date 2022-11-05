import React, { FC } from "react";
import AboutItem from "../components/AboutItem";
import about from '../data/about';

const About: FC<{ header?: string }> = ({ header }) => (
    <div className="AboutContainer">
        <h1>
            { header || 'About Me' }
        </h1>
        <div className="AboutItems">
            { about.map((item, i) => (
                <AboutItem key={i} icon={item.icon} title={item.title} />
            )) }
        </div>
    </div>
);

export default About;