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
    avatar: require('./assets/ihebb.jpg'),
    name: "GENERAL SECRETARY",
    role: "Dahel Iheb",
    skills: ["5th year student at ENSTP", "Ex president of LTP"],
    experience: "Over 3 Years of experience"
  },

  
  {
    place: "leader",
    avatar: require('./assets/tasnim.webp'),
    name: "HUMAN RESOURCES MANAGER",
    role: "Oudai Tasnim Ikram",
    skills: ["Second year Student at ENP Algiers", "exellent at communicating"],
  },


  

  {
    place: "leader",
    avatar: require('./assets/iheb2.jpg'),
    name: "HUMAN RESOURCES CO-MANAGER",
    role: "Dahel Yasmine",
    skills: ["1st year of political science", "Speaks English and French fluently"],
  },
  
  {
    place: "leader",
    avatar: require('./assets/raouf.jpg'),
    name: "RELEX MANAGER",
    role: "Souilamas Abderaouf",
    skills: ["3rd year student of Process engineering", "Speaks English and French fluently"],
    experience: "Over 2 Years of experience"
  },
  {
    place: "leader",
    avatar: require('./assets/najib.jpg'),
    name: "FINANCE MANAGER",
    role: "Birem Mohamed Nadjib",
    skills: ["first year student of process engineering"],
  },



  {
    place: "leader",
    avatar: require('./assets/yasmine2.webp'),
    name: "Design MANAGER",
    role: "Ouzaghla Yasmine",
    skills: ["Second year process engineering-INH", "Graphic/Blender Designer"],
  },
  {
    place: "leader",
    avatar: require('./assets/DSC02902.JPG'),
    name: "DEV MANAGER",
    role: " Roudj Abdelghani ",
    skills: ["Second year student at ESI Algiers","member of جمعية العلماء المسلمين","Frontend Developer"],
  },
  
  {
    place: "leader",
    avatar: require('./assets/jalil.jpg'),
    name: "DEV CO-MANAGER",
    role: "Merzougui Abdeljalil",
    skills: ["Second year student at ESI Algiers","UI/UX Designer","Backend Developer"],
    experience: "Over 2 Years of experience"

  },


  {
    place: "leader",
    avatar: require('./assets/mohaaa.jpg'),
    name: " MEDIA-COM MANAGER",
    role: "Maddi Mohammed",
    skills: ["Second year Student at ENP Algiers", "member of جمعية العلماء المسلمين" ,"Excellent at communicating",],
  },
  {
    place: "leader",
    avatar: require('./assets/dhoha.jpg'),
    name: " MARKETING MANAGER",
    role: "Boukhatem Dhoha",
    skills: ["Second year scientific high school student", "member of جمعية العلماء المسلمين"],
  },


  {
    place: "leader",
    avatar: require('./assets/safia.jpg'),
    name: "PLANING MANAGER",
    role: "Ghezal Safia",
    skills: ["3rd year medical student","Excellent organizer", "Team leader"],
  },
  {
    place: "leader",
    avatar: require('./assets/malek.webp'),
    name: "PRODUCTION MANAGER",
    role: "Oumouna Abdelmalek",
    skills: [ "4th Year student at ENSTP","Video Editer", "member of جمعية العلماء المسلمين" ],
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