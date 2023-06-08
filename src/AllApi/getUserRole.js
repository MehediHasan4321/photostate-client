export const getUserRole = async email =>{
    const res =await fetch(`${import.meta.env.VITE_BASE_URL}/user/role/${email}`)
    const data = await res.json()
    return data
}