export const updateCourseById = async (course,id)=>{
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/courses/${id}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(course)
    })
    const data = await res.json()
    return data
}