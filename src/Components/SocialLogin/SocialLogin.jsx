import React from 'react';
import { BsGoogle } from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <div className='mt-5'>
            <div className='flex items-center gap-2 text-xl font-semibold'>
                <hr className=' border-[1px] border-neutral-400 w-full'/>Or<hr  className=' border-[1px] border-neutral-400 w-full'/>
            </div>
            <button className='w-full py-4 font-semibold border-[2px] rounded-md mt-4'>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;