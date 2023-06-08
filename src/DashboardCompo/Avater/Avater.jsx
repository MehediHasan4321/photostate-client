
import { useAuth } from '../../Utlites/useAuth';

const Avater = ({ user, role }) => {
    console.log(role)
    return (
        <div className='flex flex-col gap-2 items-center'>
            <div className='relative'>
                <img className='w-24 h-24 rounded-full object-cover' src={user.photoURL} alt="Profile Pic" />
                <span className='text-white text-sm rounded-md px-1 bg-purple-400 absolute -right-8 bottom-0'>{role}</span>
            </div>

            <h1 className='text-xl md:text-3xl font-semibold text-neutral-600'>{user.displayName}</h1>
            <p className='text-sm text-neutral-600'>{user.email}</p>
        </div>
    );
};

export default Avater;
//