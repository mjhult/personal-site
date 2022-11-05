import { url } from 'inspector';
import React, { FC } from 'react';
import '../styles/components/Parallax.scss';

const Parallax: FC<{
    width?: string,
    height?: string,
    background?: string,
    children?: any,
}> = ({ width, height, background, children }) => (
    <div className="Parallax" style={{ width: width || '100vw', height: height || '100vh', backgroundImage: `url(${background})` || '' }}>
        <div className="ParallaxContent">
            { children }
        </div>
    </div>
);

export default Parallax;