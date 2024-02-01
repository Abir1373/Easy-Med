import React, { useEffect, useState } from 'react'

const Doctorcard = ({ doctors }) => {
  const { doctor_name, fee, image_link, desingnation, degree, _id } = doctors;

  return (
    <div className="card w-96 bg-base-100 shadow-2xl translate-x-2">
      <figure className="px-10 pt-10">
        {image_link ?
          <img src={image_link} alt="..." className="rounded-full w-28 h-28" />
          :
          <i className="fa-solid fa-user-doctor text-5xl"></i>}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{doctor_name}</h2>
        <p className='text-xs'>{degree}</p>
        <p className='text-xs'>{desingnation}</p>
        <p className="text-xl font-bold text-green-700">{fee}TK</p>
        <div className="card-actions">
          <button className="btn btn-neutral" onClick={() => document.getElementById('my_modal_5').showModal()}>Make appointment</button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" value={_id} />
              <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  )
}
export default Doctorcard
