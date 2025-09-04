
import foto from './assets/flicha.png';
import flicha from './assets/flicha2.png';
import { useState } from 'react';
import './Departement.css';
import Card from './card.js';

function Departement({ 
title2, 
description2, 
image2,  
data2 
}) {
const [showSection2, setShowSection2] = useState(false);

return (
    <div className="Container">
    <div className={`section1 slide ${showSection2 ? "exit-left" : "enter"}`}>
        <button className='btn' onClick={() => setShowSection2(true)}>
        <img src={foto} alt='' />
        </button>
        <img className='img1' src={image2} alt='' />
        <div className='ketba'>
        <h1>{title2}</h1>
        <p>{description2}</p>
        </div>
    </div>

    
    <div className={`section2 slide ${showSection2 ? "enter" : "exit-right"}`}>
        <Card data={data2} />
        <button className='btn' onClick={() => setShowSection2(false)}>
        <img src={flicha} alt='' />
        </button>
    </div>
    </div>
);
}

export default Departement;

