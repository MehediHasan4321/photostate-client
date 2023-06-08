import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Utlites/useAuth";

const PrivetRoute = ({ children }) => {
    const from = useLocation()
    const { user, loading } = useAuth()
    if (loading) {
        return <p className="text-3xl font-semibold  text-center mt-12">Loading.....</p>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{from}} replace></Navigate>
}
export default PrivetRoute;