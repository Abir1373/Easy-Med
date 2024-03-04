import React from 'react';

const DbMain = () => {
    let [users, refetch] = getUsers()
    console.log(users)
    if (!users) {
        <span className="loading loading-spinner text-secondary items-center justify-center"></span>
    }
    return (
        <div>
            Dashboard
        </div>
    );
};

export default DbMain;