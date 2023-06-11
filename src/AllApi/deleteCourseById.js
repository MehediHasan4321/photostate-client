export const deleteCourseById = async id => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/courses/${id}`,{
        method:"DELETE",
        headers:{
            authorization : `beares ${localStorage.getItem('access_token')}`
        }
    })
    const data = await res.json()
    return data
}