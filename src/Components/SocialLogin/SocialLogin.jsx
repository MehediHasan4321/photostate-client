import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Utlites/useAuth";
import { toast } from "react-hot-toast";
import { saveUserToDB } from "../../AllApi/saveUserToDB";

const SocialLogin = () => {
    const {loginWithGoogle} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const handleSocialLogin = ()=>{
        loginWithGoogle()
        .then(result=>{
            saveUserToDB(result.user)
            .then(data=>{
                if (data.upsertedId || data.modifiedCount > 0) {
                    toast.success('Login With Google Successfully')
                    navigate(from, { replace: true })
                }
            })
        })
        .catch(err=>toast.error(err.message))
    }
    return (
        <div className='mt-5'>
            <div className='flex items-center gap-2 text-xl font-semibold'>
                <hr className=' border-[1px] border-neutral-400 w-full'/>Or<hr  className=' border-[1px] border-neutral-400 w-full'/>
            </div>
            <button onClick={handleSocialLogin} className='w-full py-4 font-semibold border-[2px] rounded-md mt-4'>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;