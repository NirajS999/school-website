import React from 'react'
import { Link } from 'react-router-dom'
import { aboutUs } from '../constants'

const About = () => {
  return (
    <div className='section-margin'>
      <div className='text-center my-4'>
        <h1 className='font-semibold text-4xl'>Welcome To <Link className='text-orange-700 font-semibold' href="/">Springdale Public School</Link></h1>
        <p className='text-xl my-2'>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </div>
      <div className='flex gap-12 my-8'>
        <div className='items-center w-2/5 my-2 hidden lg:flex '>
          <img src="../about.jpg" alt="" />
        </div>
        <div className='lg:w-3/6'>
        {aboutUs?.map((data)=>(
        <div className='flex lg:inline-flex gap-2 shadow-2xl p-4' key={data.title}>
          <img className='w-[36px] h-[36px] mt-4' src={data.logo} alt="logo" />
          <div className='my-2'>
            <h2 className='text-2xl font-bold my-1'>{data.title}</h2>
            <p>{data.subtitle}</p>
          </div>
        </div>
        ))}
        </div>  
      </div>
      
    </div>
  )
}

export default About
