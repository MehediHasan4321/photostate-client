import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = ({isLoading}) => {
    return (
        <div className='flex justify-center items-center h-[50vh]'>
            <HashLoader color={"#27B397"} loading={isLoading}/>
        </div>
    );
};

export default Loader;