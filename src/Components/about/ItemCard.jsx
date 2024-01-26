import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const ItemCard = () => {
    const [datas, setDatas] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('menu.json');
            const jsonData = await response.json();
            setDatas(jsonData);
            setLoading(false);
        };

        fetchData();
    }, []);



    return (
        <div className='flex flex-col'>
            <div className='text-center text-3xl font-bold'>Featured Products</div> 
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    datas.map((data, index) => (
                        <SingleCard key={index} data={data}></SingleCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ItemCard;