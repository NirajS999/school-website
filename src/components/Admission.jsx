import React from 'react'
import { admission } from '../constants'

const Admission = () => {
  return (
    <div className='my-10 py-10 w-9/12 mx-auto px-12 border border-black'>
      <h1 className='text-4xl font-bold my-4'>Admission</h1>
      <div>
        {admission?.map((data)=>(
          <div className='my-4' key={data.title}>
            <h2 className='font-semibold text-2xl'>{data.title}</h2>
            <p>{data.subtitle}</p>
            <div>
              {data.dates?.map((item)=>(
                <ul className='list-disc'>
                  <li>{item}</li>
                </ul>
              ))}
            </div>

          </div>
        ))}
      </div>
      <a className='px-6 py-2 bg-blue-900 text-white font-lg shadow-xl shadow-blue-900/50 rounded hover:ring-4 ring-blue-600' href="../Admission-form.pdf" download="Admission Form" target='_blank'>
      <button>Download</button>
</a>
      
    </div>
  )
}

export default Admission
