import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = ({isLoading,color}) => {
    return (
        <div className='flex justify-center items-center h-[50vh]'>
            <HashLoader color={color} loading={isLoading}/>
        </div>
    );
};

export default Loader;