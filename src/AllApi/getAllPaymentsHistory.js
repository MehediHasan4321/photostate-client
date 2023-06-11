export const getAllPaymentsHistory = async (email)=>{
    
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/allPayments?email=${email}`,{
        method:"GET",
        headers:{
            authorization : `beares ${localStorage.getItem('access_token')}`
        }
    })
    const data = await res.json()
    return data
}