export const getAllUser = async()=>{
    const res= await fetch(`${import.meta.env.VITE_BASE_URL}/users`)
    const data = await res.json()
    return data
}