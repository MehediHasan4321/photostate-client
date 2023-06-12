// export const getAllPaymentsHistory = async (email)=>{

import { useQuery } from "@tanstack/react-query"
import useAxiosSecures from "../Utlites/useAxiosSecures"


//     const res = await fetch(`${import.meta.env.VITE_BASE_URL}/allPayments?email=${email}`,{
//         method:"GET",
//         headers:{
//             authorization : `beares ${localStorage.getItem('access_token')}`
//         }
//     })
//     const data = await res.json()
//     return data
// }
 const getAllPaymentsHistory = email => {
    const [axiosSerure] = useAxiosSecures()
    const { data: paymentHistory = [], refetch, isLoading: paymentLoading } = useQuery({
        queryFn: async () => {
            const res = await axiosSerure(`/allPayments?email=${email}`)

            return res.data
        }, queryKey: 'paymentHistory'
    })
    return { paymentHistory, refetch, paymentLoading }
}

export default getAllPaymentsHistory