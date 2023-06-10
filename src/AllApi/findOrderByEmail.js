export const findOrderByEmail = async  (email,status)=>{
    const res = await fetch( `${import.meta.env.VITE_BASE_URL}/courseOrder/${email}?status=${status}`)
    const data = await res.json()
    return data
}