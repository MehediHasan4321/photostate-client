export const deleteCourseById = async id => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/courses/${id}`,{
        method:'DELETE'
    })
    const data = await res.json()
    return data
}