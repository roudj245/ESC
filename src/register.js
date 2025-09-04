import'./register.css'
import  SendRegistration  from './registrations.js'
export default function Register(){

    return(
        <div className="register">
            <h2 className='lider'>JOIN ESC</h2>
            <p className='amine'>Where Curiosity Meets Community</p>
            <div className='f_input'>
                <input  required type='text'  placeholder="First name"></input>
                <input  required type='text'  placeholder="Last name"></input>
            </div>
            <div className='f_input'>
            <input required type='email' placeholder="email"></input>
            <input required type='tel'  placeholder="phone number"></input>
            </div>
            <select required>
                <option value="" disabled selected hidden>Select your choice</option>
                <option value="dev">Dev</option>
                <option value="design">Design</option>
                <option value="hr">human resources</option>
                <option value="production">production</option>
            </select>

        <textarea required placeholder="say something"></textarea>
        <button  className='join'  onClick={ SendRegistration }>  <p>REGISTER</p></button>

        </div>


    );
}


