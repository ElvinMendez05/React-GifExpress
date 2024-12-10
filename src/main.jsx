import React from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './gifExpertApp'
import './style.css';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>,
)
