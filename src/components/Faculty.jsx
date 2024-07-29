import React from 'react'
import { faculty } from '../constants'

const Faculty = () => {
  return (
    <div className='bg-red-900 px-12 pb-8'>
      <h1 className='headings py-8 text-white'>Faculty</h1>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 '>
        {faculty.map((data)=>(
          <div className='bg-gray-400 px-4 py-4 text-center' key={data.name}>
            <img className='mx-auto' src={data.image} alt="Proffesor" />
            <h2 className='font-bold text-xl'>{data.name}</h2>
            <p>{data.designation}</p>
            <p>{data.qualification}</p>
            <p>{data.experience}</p>

          </div>

        ))}
      </div>
    </div>
  )
}

export default Faculty
