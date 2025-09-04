
import './about.css'
import Mask from './assets/Mask.png'

function About(){
    return(
        <div className='about'>
        <img src ={Mask} alt =''></img>
        <div className="right2">
            <h1>ABOUT</h1>
            <p className='esc'>ESC CLUB</p>
            <div className='lala'>
            <p className='para'>
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha 
                retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi 
                n tempor.
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