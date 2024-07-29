import React from 'react';
import Contact from './Contact';
import Map from './Map';
import { contact } from '../constants';
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className="bg-stone-500">
      <div>
        <Contact />
      </div>
      <div className='py-10 mx-12 lg:mx-20 flex-block justify-evenly gap-6 items-center'>
        <div>
        <Map />
        </div>
        <div>
          {contact.map((data)=>(
            <div className='text-white text-lg font-semibold my-2'>
              <span>{data.title} : </span>
              <span>{data.subtitle}</span>
            </div>
          ))}
          <SocialMedia />

        </div>
      </div>
      
    </div>
  )
}

export default Footer
