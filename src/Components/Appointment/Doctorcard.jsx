import React, { useEffect, useState } from 'react'


const Doctorcard = ({ doctors }) => {
  let { doctor_name, fee, image_link, desingnation, degree, _id } = doctors;
  
  return (
    <div className="card w-96 bg-base-100 shadow-2xl translate-x-2">
      <figure className="px-10 pt-10">
        {doctors.image_link ?
          <img src={doctors.image_link} alt="..." className="rounded-full w-28 h-28" />
          :
          <i className="fa-solid fa-user-doctor text-5xl"></i>}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{doctors.doctor_name}</h2>
        <p className='text-xs'>{doctors.degree}</p>
        <p className='text-xs'>{doctors.desingnation}</p>
        <p className="text-xl font-bold text-green-700">{doctors.fee}TK</p>
        
      </div>
    </div>
  )
}
export default Doctorcard
