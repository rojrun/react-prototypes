import React from 'react';
import './scrapbook.css';
import imageData from './images_data';
import ScrapbookImage from './scrapbook_images';

const Scrapbook = () => (
    <div className="scrapbook-container">
        <ScrapbookImage about={imageData[0]}/>
    </div>
);

export default Scrapbook;