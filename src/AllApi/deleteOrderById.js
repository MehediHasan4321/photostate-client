export const deleteOrderById = async id=>{
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/deleteOrder/${id}`,{
        method:"DELETE"
    })
    const data = await res.json()
    return data
}
