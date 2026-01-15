
import insta from './assets/instagram (1).png'
import ytb from './assets/youtube (2).png'
import facebook from './assets/facebook (1).png'
import tik from './assets/tic-tac.png'
import './footer1.css';
import vector from './assets/Vector 22 (3).png'
import f_logo from './assets/without-bg-06.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section id ='footer'>
      <footer>
        <ul className='maddi'>
          <li id="forchita">
            <img src={f_logo} alt="Frame" />
          </li>

          <img className="qq" src={vector} alt="separator" />

          <li className='ghano'>
            <div id="one">
              <Link to='/#home'><p>HOME</p></Link>
              <Link to='/#about' ><p>ABOUT</p></Link>
              <Link to='/#leaders'><p>LEADERS</p></Link>
              <Link to='/#departement'><p>DEPARTMENTS</p></Link>
              <Link to='/#events'><p>UP-EVENTS</p></Link>
              <Link to='#register'><p>JOIN ESC</p></Link>
            </div>
          </li>

          <img className="qq" src={vector} alt="separator" />

          <li id="prblm">
            <p id="zyada">SOCIALIZE WITH ESC</p>
            <div id="three">
              <a href="https://www.facebook.com/share/1CJbHZ4gfF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><img src={facebook}alt="facebook" /></a>
              <a href="" target="_blank" rel="noopener noreferrer"><img src={ytb} alt="youtube" /></a>
              <a href="https://www.instagram.com/epstimi.signum/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram" /></a>
              <a href="https://www.tiktok.com/@esc_club?_t=ZS-8zhVFvEDsls&_r=1" target="_blank" rel="noopener noreferrer"><img src={tik} alt="tiktok" /></a>
            </div>
            <a href ='#register'><p id="boutton">REGiSTER</p> </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}



