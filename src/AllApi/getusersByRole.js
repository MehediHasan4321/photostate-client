export const getUserByRole = async role => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${role}`,{
        method:"GET",
        headers:{
            authorization : `beares ${localStorage.getItem('access_token')}`
        }
    })
    const data = await res.json()
    return data
}