import React from 'react'

const Map = () => {
    return (
        <div className='bg-gray-200 p-4 shadow-2xl'>
          <iframe className='lg:w-[300px] h-[300px] w-screen '
          title="google map" 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10900.769350547382!2d74.0379861858171!3d14.992485191001201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721986508513!5m2!1sen!2sin" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      );
}

export default Map
