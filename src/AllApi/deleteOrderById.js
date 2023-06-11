export const deleteOrderById = async id=>{
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/deleteOrder/${id}`,{
        method:"DELETE",
        headers:{
            authorization : `beares ${localStorage.getItem('access_token')}`
        }
    })
    const data = await res.json()
    return data
}
