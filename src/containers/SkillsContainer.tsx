import React, { FC } from "react";
import SkillItem from "../components/SkillItem";
import skills from '../data/skills';

const Skills: FC<{ header?: string }> = ({ header }) => (
    <div className="SkillsContainer">
        <h2>
            { header || 'Skills' }
        </h2>
        <div className="Skills">
            { skills.map((skill, i) => (
                <SkillItem key={i} pointer={skill.pointer} space={skill.space} size={skill.size} skill={skill.skill} />
            ))}
        </div>
    </div>
);

export default Skills;