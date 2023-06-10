export const updateOrderById = async (id,update)=>{
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/updateOrder/${id}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(update)
    })
    const data = await res.json()
    return  data
}