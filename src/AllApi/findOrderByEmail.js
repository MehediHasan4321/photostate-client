export const findOrderByEmail = async  (email,status)=>{
    const res = await fetch( `${import.meta.env.VITE_BASE_URL}/courseOrder/${email}?status=${status}`,{
        method:"GET",
        headers:{
            authorization : `beares ${localStorage.getItem('access_token')}`
        }
    })
    const data = await res.json()
    return data
}