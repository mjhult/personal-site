import React, { FC } from "react";
import ResumeItem from "../components/ResumeItem";
import educations from '../data/education';

const Education: FC<{ header?: string }> = ({ header }) => (
    <div className="EducationContainer">
        <h2>
            { header ?? 'Education' }
        </h2>
        <div className="Education">
            { educations.map((education, i) => (
                <ResumeItem key={i} title={education.title} subTitle={education.subTitle} content={education.content} />
            ))}
        </div>
    </div>
);

export default Education;