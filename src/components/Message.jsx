import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const Message = () => {
  return (
    <div className='border border-black w-10/12 lg:w-3/5  mx-auto py-8 px-8 rounded-2xl bg-orange-500 text-white shadow-2xl'>
      <FaQuoteLeft className='text-4xl' />
      <p className='text-xl font-semibold my-2'>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future </p>
      <span className='flex gap-2 '>
        <img src="../faculty/john.jfif" alt="John Doe" width={50} height={50} className='rounded-full' />
        <h6>John Doe, Principal</h6>
      </span>
    </div>
  )
}

export default Message
