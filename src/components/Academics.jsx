import React from 'react'
import { academics, curriculum } from '../constants'

const Academics = () => {
  return (
    <div className='mx-4 my-8 py-8 px-4 md:px-8 border text-white bg-gray-500'>
      <h1 className='headings'>Academics</h1>
      <div className='border-2 p-8 my-4 bg-black'>
        <h2 className='text-2xl'>Curriculum</h2>
        <div className='flex-block gap-2 justify-evenly'>
        {curriculum?.map((data)=>(
            <div className='border-2 text-center p-8 my-4 bg-gray-500' key={data.title}>
                <h3 className='font-semibold text-xl mb-4'>{data.title}</h3>
                {data.subjects?.map((item)=>(
                    <ul className='flex list-disc '>
                        <li>{item}</li>
                    </ul>
                ))}
                <div className='flex flex-col md:flex-row gap-12'>
                {data.details?.map((item)=>(
                <div className='mx-4'>
                    <h4 className='font-semibold text-lg mb-4'>{item.title}</h4>
                    {item.subjects?.map((items)=>(
                    <ul className='flex list-disc'>
                      <li>{items}</li>
                    </ul>
                ))}
              
                </div>
                ))}
                </div>

            </div>
        ))}
        </div>
      </div>
      <div className='flex-block gap-8'>
      {academics.map((data)=>(
        <div className='border px-8 py-8 bg-black' key={data.title}>
          <h2 className='text-2xl font-semibold'>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Academics
