export const updateUserRoleByEmail = async(email,role)=>{
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/updateUserRole/${email}`,{
        method:"PUT",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(role)
    })
    const data = res.json()
    return data
}
