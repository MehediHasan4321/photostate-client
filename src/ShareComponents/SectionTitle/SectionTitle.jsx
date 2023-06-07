import React from 'react';

const SectionTitle = ({title,subTitle}) => {
    return (
        <div className='text-center my-12'>
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className='text-lg font-semibold text-neutral-500 mt-4'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;