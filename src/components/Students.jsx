import React from 'react'
import { achievements, life, studentCouncil } from '../constants'

const Students = () => {
  return (
    <div className='px-12 md:px-20 py-8 bg-black text-white border'>
        <div className=''>
            <h2 className='headings my-8'>Life At Springdale</h2>
            <div className='flex-block gap-4 justify-evenly py-8'>
                {life.map((data)=>(
                    <div className='border-2 px-8 py-8 bg-slate-500' key={data.title}>
                        <h3 className='text-2xl font-semibold'>{data.title}</h3>
                        <p>{data.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='my-8'>
            <h2 className='sub-headings'>Achievements</h2>
            <div className='flex-block gap-4 md:gap-0 justify-evenly text-center'>
            {achievements.map((data)=>(
                <div className='border-2 bg-gray-300 text-black py-4 px-4' key={data.name}>
                    <img className='mx-auto' src={data.image} alt="student" />
                    <h1 className='text-lg font-semibold my-2'>{data.name}</h1>
                    <span>{data.award}</span>
                </div>
            ))}
            </div>
        </div>

        <div className=''>
            <h2 className='sub-headings'>Student Council</h2>
            <div className='flex-block bg-gray-600 gap-8 px-8 py-8'>
                {studentCouncil.map((data)=>(
                    <div className='relative w-full lg:w-4/12 ' key={data.name} >
                        <img className='block w-full h-full object-contain' src={data.image} alt="" />
                        <div className='w-full h-full absolute top-0 left-0 bg-black-rgba flex flex-col justify-center items-center opacity-0 duration-75 hover:opacity-100 text-xl font-bold'>
                            <h2>{data.name}</h2>
                            <p>{data.position}</p>
                            <p>{data.grade}</p>
                        </div>

                    </div>

                    
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Students
