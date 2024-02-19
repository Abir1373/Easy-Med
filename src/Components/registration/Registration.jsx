import React from 'react';
import FirstRegistration from './FirstRegistration';
import SecondRegistration from './SecondRegistration';

const Registration = () => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl m-5 font-bold " aria-label="User Registration" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <FirstRegistration />
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl m-5 font-bold" aria-label="Doctor Registration" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <SecondRegistration />
            </div>
        </div>
    );
};

export default Registration;