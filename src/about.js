
import './about.css'
import logog from './assets/logo .png'

function About(){
    return(
        <div id ='about' className='about'>
        <img src ={logog} alt =''></img>
        <div className="right2">
            <h1>ABOUT</h1>
            <p className='esc'>ESC CLUB</p>
            <div className='lala'>
            <p className='para'>
                Founded in Cherchell, Epstimi Signum Club or "اثر المعرفة"is the official student-led scientific association of جمعية العلماء المسلمين, created by its dedicated members. The club is committed to promoting curiosity, collaboration, and innovation. We organize conferences, workshops, and competitions across various scientific fields, offering members the chance to learn, experiment, and share knowledge. Serving as a bridge between students and the professional world, the ESC Club encourages research, creativity, and teamwork while fostering a spirit of scientific excellence within our community.
            </p>
            </div>
            <a href ='https://registrationesc.vercel.app/' target="_blank" rel="noopener noreferrer">
            <button>
            <p>LET'S GET IN TOUCH</p>
            </button>
            </a>
        </div>
        </div>

    );
}
export default About