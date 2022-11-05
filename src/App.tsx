import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';

const App = () => (
    <div className="MainContent">
        <h1>Test</h1>
    </div>
);

createRoot(document.querySelector('.App')!).render(<App />);