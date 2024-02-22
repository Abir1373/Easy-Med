import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import FirstRegistration from './firstregistration/FirstRegistration';
import SecondRegistration from './secondregistration/SecondRegistration';


const RegistrationLayout = ({ children }) => {
    const [regPage,setRegPage] = useState(1)
    return (
        <div className="flex flex-col">
            <div className='mx-auto container max-w-screen-xl items-center justify-center flex'>
                <button className="btn btn-outline btn-info text-xl m-4" onClick={()=>setRegPage(1)}>User Registration</button>
                <button className="btn btn-outline btn-info text-xl m-4" onClick={()=>setRegPage(2)}>Doctor Registration</button>
            </div>
            <div>
                {
                    (regPage===1) ? <FirstRegistration/> : <SecondRegistration/>
                }
            </div>
        </div>
    );
};

export default RegistrationLayout;