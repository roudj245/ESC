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
                    description="Our local"
                    image={pic3}
                    link = 'https://maps.app.goo.gl/Q6BbwxW6MP51H92g6?g_st=ipc'
                    />
                    <Section
                    title1="Give Us a Call"
                    description="05 54034581" 
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