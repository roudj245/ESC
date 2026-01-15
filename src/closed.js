import './closed.css'
import { Link } from 'react-router-dom';

export default function Closed(){

return(
    <div className='sec4'>
    <div className='closed'>
        <p className='txt5'>
            REGISTRATIONS NOW ARE CLOSED!
        </p>
        <p className='txt4'>
            Follow us on social media for updates on future registration periods.
        </p>


    </div>
    <Link to ="/">
        <button>
            <p className='return'>
            return
            </p>
        </button>
    </Link>
    </div>

);

}