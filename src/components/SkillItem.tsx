import React, { FC, ReactElement, useState } from 'react';
import Pointer from '../utils/Pointers';
import SkillItem from '../utils/types/SkillTypes';

const SkillItem: FC<SkillItem> = ({ pointer, space, size, skill, demo }) => {
    const [ demoHidden, setDemoHidden ] = useState(true);

    return (
        <div className="SkillItem">
            <p onClick={() => setDemoHidden(!demoHidden)}><span style={{ marginRight: space || '', fontSize: size || '' }}>{ pointer }</span>{ skill }</p>
            <div className="SkillDemo" hidden={demoHidden}>
                { demo || 'No demo available yet.' }
            </div>
        </div>
    );
}

export default SkillItem;