import React from 'react'
import { useState } from 'react'

import { gallery } from '../constants'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/keyboard'

const Gallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <section className='min-h-screen w-full md:w-9/12 md:px-12 mx-auto my-12 bg-gray-800'>
      <h1 className='headings text-white py-8'> Gallery</h1>
      <div className=''>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          keyboard={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs, Keyboard]}
          className='h-96 w-full rounded-lg'
        >
          {gallery.map((data, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                {data.type === "video"
                ? <video src={data.url} className='block h-full w-full object-cover' controls autoPlay ></video>
                :
                  <img
                  src={data.url}
                  alt={data.title}
                  className='block h-full w-full object-cover'
                />
              }
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
          {gallery.map((data, index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center hover:scale-125'>
              {data.type === "video"
                ?<video
                src={data.url}
                alt={data.title}
                className='block h-full w-full object-cover' controls autoPlay />
              :
                
                <img
                  src={data.url}
                  alt={data.title}
                  className='block h-full w-full object-cover'
                />
              }
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Gallery
