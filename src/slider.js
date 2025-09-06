import './card.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css'

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

export default function Card2({ data }) {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <div className="cards">
      <div className="slider-wrapper">
        <div className="custom-prev arrow"></div>
        
        <div className="card-slider-container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
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
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className='all'>
                  {item.place && <p className='Titre4'>{item.place}</p>}
                  <Card1 item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="custom-next arrow"></div>
      </div>
    </div>
  );
}