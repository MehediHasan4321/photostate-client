import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Utlites/useAuth";
import Loader from "../ShareComponents/Loader/Loader";

const PrivetRoute = ({ children }) => {
    const from = useLocation()
    const { user, loading } = useAuth()
    if (loading) {
        return <Loader isLoading={loading} color={'#27B397'}/>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{from}} replace></Navigate>
}
export default PrivetRoute;