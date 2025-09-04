import foto from './assets/flicha.png';
import flicha from './assets/flicha2.png';
import { useState } from 'react';
import './Departement2.css';
import Card from './card.js';

function Departement2({ 
title3, 
description3, 
image3,  
data3 
}) {
const [showSection2, setShowSection2] = useState(false);

return (
    <div className="Container">
    <div className={`section1 slide2 ${showSection2 ? "exit-left2" : "enter2"}`}>
        <div className='ketba'>
        <h1>{title3}</h1>
        <p>{description3}</p>
        </div>
        <img className='img1' src={image3} alt='' />
        <button className='btn' onClick={() => setShowSection2(true)}>
        <img src={flicha} alt='' />
        </button>
    </div>

    
    <div className={`section2 slide2 ${showSection2 ? "enter2" : "exit-right2"}`}>
        <button className='btn' onClick={() => setShowSection2(false)}>
        <img src={foto} alt='' />
        </button>
         <Card data={data3} />
    </div>
    </div>
);
}

export default Departement2;
