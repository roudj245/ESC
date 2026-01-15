import './home.css'
import pic from './assets/lingua.webp'
import { Link } from 'react-router-dom'


function Home(){
    return(
    <div id ='home'className='home'>
        <div className='left'>
        <h1>Shaping the Future <br></br> Through Science</h1>
        <p>Join a community of curious minds passionate<br></br> about discovery, research, and innovation. Our club <br></br> is dedicated to exploring science through projects,<br></br> workshops, and collaboration.</p>
        <Link to="/register">
                <button> 
                    <p>Register</p>
                </button>
            </Link>


        </div>
        <img src ={pic} alt =''></img>


    </div>

    );
}
export default Home;