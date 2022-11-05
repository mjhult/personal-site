import React from 'react';
import { createRoot } from 'react-dom/client';
import Parallax from './components/Parallax';
import './styles/main.scss';
import image from './images/mathew.png';
import About from './containers/AboutContainer';

const App = () => (
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
    </div>
);

createRoot(document.querySelector('.App')!).render(<App />);