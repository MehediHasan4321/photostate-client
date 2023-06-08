export const addCouse = async course => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/courses`,{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(course)
    })
    const data = await res.json()
    return data
}