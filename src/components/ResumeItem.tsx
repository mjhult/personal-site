import React, { FC } from 'react';
import { ResumeItem } from '../utils/types/ResumeItemTypes';

const ResumeItem: FC<ResumeItem> = ({ title, subTitle, content }) => (
    <div className="ResumeItem">
        <h3>
            { title }
        </h3>
        <h4>
            { subTitle }
        </h4>
        { content ? 
            <div className="ResumeItemContent">
                { content.map((point, i) => (
                    <p key={i}><span style={{ marginRight: point.space || '', fontSize: point.size || '' }}>{ point.type }</span> { point.value }</p>
                ))}
            </div> : null }
    </div>
);

export default ResumeItem;