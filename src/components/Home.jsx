import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { homeLinks } from '../constants';
import 'swiper/css/autoplay';

const Home = () => {
  return (
    <div className=''>
      <Swiper
      autoplay={{
          delay: 5000,
          disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
      modules={[Autoplay]}
    >
      {homeLinks.map((data)=>(
        <SwiperSlide key={data.title}>
          <div className='relative h-[75vh] w-full'>
            <div className='absolute inset-0 bg-center bg-cover brightness-50'
            style={{backgroundImage:`url(${data.image})`}} />
            <div className='absolute inset-0 text-white flex flex-col justify-center items-center hover-effect'>    
              <h1 className='text-4xl md:text-6xl'>{data.title}</h1>
              <span className='text-xl md:text-3xl'>{data.subtitle}</span>  
            </div>
          </div>
        </SwiperSlide>
      ))}

      

      ...
    </Swiper>
    </div>
  )
}

export default Home
