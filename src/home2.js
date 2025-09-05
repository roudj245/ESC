import './home2.css'
import Section from './section.js'
import pic2 from './assets/shape.png'
import pic3 from './assets/Page-1.png'
import pic4 from './assets/mail.png'


function Home2(){
    return(
        <div className="home2">
            <div className='white'>
                <div className='black'>
                    <Section
                    title1="Pay Us a Visit"
                    description="centre ville cherchell"
                    image={pic3}
                    />
                    <Section
                    title1="Give Us a Call"
                    description="0553314664" 
                    image={pic2}
                    />
                    <Section
                    title1="Send Us a Message"
                    description="epstimisignum@gmail.com"
                    image={pic4}
                    />
                </div>
        
        
            </div>


        </div>

    );
}
export default Home2