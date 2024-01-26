import React from 'react';

const DrippedFruits = () => {
    const styleImage = {
        backgroundImage: `url(https://i.ibb.co/Btzm9wd/9824642.jpg)`,
        backgroundSize: 'cover',
        width: 'full', // Replace with your desired width
        height: '600px', // Replace with your desired height
      };
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/CMBMpK5/4026535-15785.jpg" style={styleImage} />
                <div className='items-center justify-center flex flex-col space-y-10'>
                    <h1 className="text-5xl font-bold">Dipped Fruits</h1>
                    <p className="py-6 px-5 text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam neque suscipit, id saepe dignissimos a, similique necessitatibus provident quis repudiandae beatae debitis aspernatur voluptatibus recusandae minus sint? Commodi quis ducimus aliquam? Eius amet, quae perspiciatis quibusdam tempore similique, adipisci, impedit accusamus magni porro recusandae quia voluptates nostrum hic consequuntur.</p>
                    <button className="btn btn-outline btn-success font-bold text-2xl">Success</button>
                </div>
                
            </div>
        </div>
    );
};

export default DrippedFruits;