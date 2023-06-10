export const getOrdersByStatun =async status=>{
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orderStatus/${status}`)
    const data = await res.json()
    return data
}