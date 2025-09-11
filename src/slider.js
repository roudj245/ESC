import './slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const members4 = [
  {
    place: "President",
    avatar: require('./assets/moundhir.jpg'),
    name: "Mouloudi El-Moundhir",
    role: "Second year student at ESI Algiers",
    skills: ["Full Stack Developer", "UI / UX designer"],
    experience: "Over 3 Years of experience"
  },
  {
    place: 'Vice President',
    avatar: require('./assets/pic3.jpg'),
    name: "Mouloudi El-Moundhir",
    role: "Third year student at ESI Algiers",
    skills: ["UI / UX designer", "Backend Developer"],
    experience: "2 Years of experience"
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