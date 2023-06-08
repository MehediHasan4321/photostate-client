import React from 'react';

const Avater = ({user}) => {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <img className='w-24 h-24 rounded-full object-cover' src={user.photoURL} alt="Profile Pic" />
            <h1 className='text-xl md:text-3xl font-semibold text-neutral-600'>{user.displayName}</h1>
            <p className='text-sm text-neutral-600'>{user.email}</p>
        </div>
    );
};

export default Avater;