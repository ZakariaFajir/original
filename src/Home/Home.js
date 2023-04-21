import React from 'react';
import './Home.css';
import img from '../Images/img1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';


const Home = () => {
    
  return (
    <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
      >
          <SwiperSlide>
          <div className="swiper-slide container">
                      <div className="home-text">
                          <span>L'original</span>
                          <h1>Venez découvrir les saveurs originales</h1>
                          <a href="#w" className="btn">Click<i className='bx bx-right-arrow-alt'></i></a>
                      </div>
                      <div>
                          <img src={img} alt="home" />
                      </div>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide container">
                      <div className="home-text">
                          <span>L'original</span>
                          <h1>Venez découvrir les saveurs originales</h1>
                          <a href="#w" className="btn">Click<i className='bx bx-right-arrow-alt'></i></a>
                      </div>
                      <div>
                          <img src={img} alt="home" />
                      </div>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide container">
                      <div className="home-text">
                          <span>L'original</span>
                          <h1>Venez découvrir les saveurs originales</h1>
                          <a href="#w" className="btn">Click<i className='bx bx-right-arrow-alt'></i></a>
                      </div>
                      <div>
                          <img src={img} alt="home" />
                      </div>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-slide container">
                      <div className="home-text">
                          <span>L'original</span>
                          <h1>Venez découvrir les saveurs originales</h1>
                          <a href="#w" className="btn">Click<i className='bx bx-right-arrow-alt'></i></a>
                      </div>
                      <div>
                          <img src={img} alt="home" />
                      </div>
                  </div>
          </SwiperSlide>
          <div className='swiper-button-prev' ></div>
          <div className='swiper-button-next' ></div>        
      </Swiper>
      
  );
};

export default Home;

