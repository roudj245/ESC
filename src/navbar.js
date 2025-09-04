import './navbar.css'
import logo from './assets/Frame.png'
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icons

function Navbar (){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className='navbar'>
            {/* Logo */}
            <div className='logo'>
                <img src={logo} alt='le logo'></img>
                <p>ESC</p>
            </div>

            {/* Desktop Links */}
            <div className='sections'>
                <a href=''>ABOUT</a>
                <a href=''>SERVICES</a>
                <a href=''>TECHNOLOGIES</a>
                <a href=''>HOW TO?</a>
            </div>

            {/* Desktop Buttons */}
            <div className='buttons'>
                <button className='contact'>
                    <p>CONTACT US</p>
                </button>
                <button className='join'>
                    <p>JOIN ESC</p>
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} color="white"/> : <Menu size={28} color="white"/>}
            </div>

           {/* Sidebar (Mobile) */}
<div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <a href=''>ABOUT</a>
    <a href=''>SERVICES</a>
    <a href=''>TECHNOLOGIES</a>
    <a href=''>HOW TO?</a>
    <button className='contact'>
        <p>CONTACT US</p>
    </button>
    <button className='join'>
        <p>JOIN ESC</p>
    </button>

    {/* Close Button as last item */}
    <div className="close-btn" onClick={() => setIsOpen(false)}>
        <X size={24} color="white" />
        
    </div>
</div>

        </div>
    );
}
export default Navbar;
