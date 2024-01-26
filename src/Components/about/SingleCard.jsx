import React from 'react';

const SingleCard = ({ data }) => {
    const imgStyle = {
        width: '500px',
        height: '500px',
        size: 'contain',
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={data.image} style={imgStyle} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-success">{data.name}!</h2>
                <p className='font-bold text-2xl'> <span className='text-orange-500'>$</span> <span className='text-rose-500'> {data.price} </span>  </p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-success text-xl">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;