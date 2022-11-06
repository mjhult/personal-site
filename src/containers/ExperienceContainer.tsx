import React, { FC } from "react";
import ResumeItem from "../components/ResumeItem";
import experiences from "../data/experience";

const Experience:FC<{ header?: string }> = ({ header }) => (
    <div className="ExperienceContainer">
        <h1>
            { header || 'Experience' }
        </h1>
        <div className="Experience">
            {experiences.map((experience, i) => (
                <ResumeItem key={i} title={experience.title} subTitle={experience.subTitle} content={experience.content} />
            ))}
        </div>
    </div>
)

export default Experience;