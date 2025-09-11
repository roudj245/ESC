import './navbar.css'
import logo from './assets/Frame.png'
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

function Navbar (){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className='navbar'>
           
            <div className='logo'>
                <img src={logo} alt='le logo'></img>
                <p>ESC</p>
            </div>

            <div className='sections'>
                <a href='#home'>HOME</a>
                <a href='#about'>ABOUT</a>
                <a href='#leaders'>LEADERS</a>
                <a href='#departement'>DEPARTEMENTS</a>
               <a href='#events'>UP-EVENTS</a>
            </div>

            
            <div className='buttons'>
               <a href = '#footer'><button className='contact'>
                    <p>CONTACT US</p>
                </button>
               </a>
                <a href='#register'>
                <button className='join'>
                    <p>JOIN ESC</p>
                </button>
                </a>
            </div>

      
            <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} color="white"/> : <Menu size={28} color="white"/>}
            </div>

          
<div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className='secs'>
    <a href='#home'>HOME</a>
    <a href='#about'>ABOUT</a>
    <a href='#leaders'>LEADERS</a>
    <a href='#departement'>DEPARTEMENTS</a>
    <a href='#event'>UP-EVENTS</a>
    </div>
   <a href='#footer' ><button className='contact'>
        <p>CONTACT US</p>
    </button>
    </a>
    <a href='#register'><button className='join'>
        <p>JOIN ESC</p>
    </button>
    </a>
    <div className="close-btn" onClick={() => setIsOpen(false)}>
        <X size={24} color="white" />
        
    </div>
</div>

        </div>
    );
}
export default Navbar;
