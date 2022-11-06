import React, { FC, ReactElement } from 'react';
import Pointer from '../utils/Pointers';
import SkillItem from '../utils/types/SkillTypes';

// TODO: add demo

const SkillItem: FC<SkillItem> = ({ pointer, space, size, skill }) => (
    <div className="SkillItem">
        <p><span style={{ marginRight: space || '', fontSize: size || '' }}>{ pointer }</span>{ skill }</p>
    </div>
);

export default SkillItem;