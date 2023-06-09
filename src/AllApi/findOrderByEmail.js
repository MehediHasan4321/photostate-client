export const findOrderByEmail = async  email=>{
    const res = await fetch( `${import.meta.env.VITE_BASE_URL}/courseOrder/${email}`)
    const data = await res.json()
    return data
}