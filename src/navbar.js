import './navbar.css'
import logo from './assets/without-bg-06.png'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext.js';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const content = {
        EN: {
            home: 'HOME',
            about: 'ABOUT',
            leaders: 'LEADERS',
            departments: 'DEPARTEMENTS',
            events: 'UP-EVENTS',
            contact: 'CONTACT US',
            join: 'JOIN ESC'
        },
        AR: {
            home: 'الرئيسية',
            about: 'حول',
            leaders: 'القادة',
            departments: 'الأقسام',
            events: 'الأحداث القادمة',
            contact: 'اتصل بنا',
            join: 'انضم إلى ESC'
        }
    };

    const currentContent = content[language];

    return(
        <div className={`navbar ${language === 'AR' ? 'rtl' : ''}`}>
            <div className='logo'>
                <img src={logo} alt='le logo'></img>
                <p>ESC</p>
            </div>

            <div className='sections'>
                <a href='#home'>{currentContent.home}</a>
                <a href='#about'>{currentContent.about}</a>
                <a href='#leaders'>{currentContent.leaders}</a>
                <a href='#departement'>{currentContent.departments}</a>
                <a href='#events'>{currentContent.events}</a>
            </div>

            <div className='buttons'>
                
                <a href='#footer'>
                    <button className='contact'>
                        <p>{currentContent.contact}</p>
                    </button>
                </a>
                
                <a href='https://registrationesc.vercel.app/' target='_blank'  rel="noopener noreferrer">
                    <button className='join'>
                        <p>{currentContent.join}</p>
                    </button>
                </a>
            </div>

            <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} color="white"/> : <Menu size={28} color="white"/>}
            </div>
            
            <div className={`sidebar ${isOpen ? 'open' : ''} ${language === 'AR' ? 'rtl' : ''}`}>
                <div className='secs'>
                    <a href='#home'>{currentContent.home}</a>
                    <a href='#about'>{currentContent.about}</a>
                    <a href='#leaders'>{currentContent.leaders}</a>
                    <a href='#departement'>{currentContent.departments}</a>
                    <a href='#events'>{currentContent.events}</a>
                </div>
                
                
                <a href='#footer'>
                    <button className='contact'>
                        <p>{currentContent.contact}</p>
                    </button>
                </a>
                
                <a href='https://registrationesc.vercel.app/' target='_blank'  rel="noopener noreferrer">
                    <button className='join'>
                        <p>{currentContent.join}</p>
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