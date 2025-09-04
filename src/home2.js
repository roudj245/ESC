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
                    description="Union St, Seattle, WA 98101, United States"
                    image={pic3}
                    />
                    <Section
                    title1="Give Us a Call"
                    description="(110) 1111-1010" 
                    image={pic2}
                    />
                    <Section
                    title1="Send Us a Message"
                    description="Contact@HydraVTech.com"
                    image={pic4}
                    />
                </div>
        
        
            </div>


        </div>

    );
}
export default Home2