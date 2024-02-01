import React from 'react';

const OverlyImage = () => {
    const styleImage = {
        backgroundImage: `url(https://i.ibb.co/Btzm9wd/9824642.jpg)`,
        backgroundSize: 'cover',
        width: 'full', // Replace with your desired width
        height: '600px', // Replace with your desired height
      };
    return (
        <div className="hero" style={styleImage}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full space-y-16">
                    <h1 className="mb-5 text-5xl font-bold">Upto 35% Off</h1>
                    <p className="mb-5 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur odio aliquid omnis possimus voluptas ipsa blanditiis corporis iusto veniam magni ex magnam tempora quidem libero, deserunt dolore eum ad dicta non consequuntur? Corrupti beatae aperiam sequi accusamus voluptatibus facere praesentium eos error aliquam fugiat. Suscipit totam minima ex distinctio quibusdam, numquam omnis enim id illo laboriosam quaerat inventore at aliquid ea, soluta non sit. Provident officiis amet maxime voluptate tenetur? Obcaecati, quis. Eos cupiditate optio numquam ad non recusandae sed facilis expedita rerum fugit pariatur mollitia, sit ratione, explicabo minima nostrum? Eaque, aperiam architecto ullam inventore porro tenetur incidunt!</p>
                    <button className="btn btn-outline btn-accent text-xl">Shop Here</button>
                </div>
            </div>
        </div>
    );
};

export default OverlyImage;