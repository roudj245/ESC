
import './about.css'
import Mask from './assets/Mask.png'

function About(){
    return(
        <div id ='about' className='about'>
        <img src ={Mask} alt =''></img>
        <div className="right2">
            <h1>ABOUT</h1>
            <p className='esc'>ESC CLUB</p>
            <div className='lala'>
            <p className='para'>
                Founded in Cherchell, the ESC Club is a student-led scientific association dedicated to promoting curiosity, collaboration, and innovation. We organize conferences, workshops, and competitions across various scientific fields, offering members the chance to learn, experiment, and share knowledge. The club also serves as a bridge between students and the professional world, encouraging research, creativity, and teamwork while fostering a spirit of scientific excellence within our community.
            </p>
            </div>
            <button>
            <p>LET'S GET IN TOUCH</p>
            </button>
        </div>
        </div>

    );
}
export default About