import './slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const members4 = [
  {
    place: "President",
    avatar: require('./assets/didine.JPEG'),
    name: "PRESIDENT",
    role: "Nejm Eddine Ben Mekhlouf",
    skills: ["4th year student of Process engineering" , "member of جمعية العلماء المسلمين"],
    experience: "Over 2 Years of experience"
  },
  {
    place: 'Vice President',
    avatar: require('./assets/pic3.jpg'),
    name: "VICE PRESIDENT",
    role: "Hamza Abdelaziz Dia",
    skills: ["member of جمعية العلماء المسلمين", "4th year student at ENSIA" ,"ex president of Ensia Tech Community"],
  },
  {
    place: "leader",
    avatar: require('./assets/malek.webp'),
    name: "DESIGN AND HR MANAGER",
    role: "Malek Oumouna",
    skills: [ "member of جمعية العلماء المسلمين" , "4th Year student at ENSTP", "Graphic Designer"],
  },
  
  {
    place: "leader",
    avatar: require('./assets/raouf.jpg'),
    name: "FINANCE AND RELEX MANAGER",
    role: "Souilamas Abderaouf",
    skills: ["3rd year student of Process engineering", "Speaks English and French fluently"],
    experience: "Over 2 Years of experience"
  },
  {
    place: "leader",
    avatar: require('./assets/DSC02902.JPG'),
    name: "DEV MANAGER",
    role: "Roudj Abdelghani",
    skills: ["Second year student at ESI Algiers","member of جمعية العلماء المسلمين","Frontend Developer"],
  },
  {
    place: "leader",
    avatar: require('./assets/mohaaa.jpg'),
    name: "MARKETING AND MEDIA MANAGER",
    role: "Mohammed Maddi",
    skills: ["Second year Student at ENP Algiers", "member of جمعية العلماء المسلمين" ,"Excellent at communicating",],
  },
  {
    place: "leader",
    avatar: require('./assets/profile2.png'),
    name: "PLANING MANAGER",
    role: "Dahel Iheb",
    skills: ["5th year student at ENSTP", "Ex president of LTP"],
    experience: "Over 3 Years of experience"
  },
  {
    place: "leader",
    avatar: require('./assets/pic2.JPG'),
    name: "VIDEO EDITING MANAGER",
    role: "Belmiloud Iyed",
    skills: ["master 1 student of Artificial intelligence", "member of جمعية العلماء المسلمين"],
  },

];

function Card1({ item }) {
  return (
    <div className="card">
      <img src={item.avatar} alt={item.name || 'Avatar'} />
      <h2>{item.name}</h2>
      <ul>
        {item.role && <li className='role'>{item.role}</li>}
        {item.skills?.map((skill, i) => (
          <li className='role' key={i}>{skill}</li>
        ))}
        {item.experience && <li className='role'>{item.experience}</li>}
      </ul>
    </div>
  );
}

function PersonnelSlider() {
  return (
    <div id='leaders' className='Organisers'>
      <p className='o-title'>OUR LEADERS</p>
      <div className="slider-wrapper3">
        <div className="custom-next3 arrow3">
          <div className="arrow-circle">
            <svg viewBox="0 0 24 24" className="arrow-icon">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </div>
          <div className="arrow-glow"></div>
        </div>

        <div className="card-slider-container3">
          <Swiper
            modules={[Navigation]}
            spaceBetween={400}
            loop={true}
            navigation={{
              nextEl: '.custom-next3',  
              prevEl: '.custom-prev3',  
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {members4.map((item, index) => (
              <SwiperSlide key={index}>
                <Card1 item={item} /> 
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-prev3 arrow3">
          <div className="arrow-circle">
            <svg viewBox="0 0 24 24" className="arrow-icon">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </div>
          <div className="arrow-glow"></div>
        </div>
      </div>
    </div>
  );
   
}

export default PersonnelSlider;