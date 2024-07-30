import React from 'react'
import { infrastructure } from '../constants'

const Infrastructure = () => {
  return (
    <div className='my-16'>
        <h1 className='text-3xl text-center font-bold'>Infrastructure and Facilities</h1>
        <div className='flex-block gap-12 my-8 mx-16 lg:mx-2 justify-center'>
        <div className='lg:w-3/12'>
          <img src="../infrastructure.avif" alt="Infrastructure" className='w-full'  />
        </div>
        <div className='flex items-center shadow-2xl px-4'>
            <ul className='list-inside list-circle'>
            {infrastructure.map((data)=>(
                <li className='my-2 text-lg'>{data}</li>
            ))}
            </ul>
        </div>
        </div>
      
    </div>
  )
}

export default Infrastructure
