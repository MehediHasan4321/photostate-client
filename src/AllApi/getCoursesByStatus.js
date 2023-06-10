export const getCoursesByStatus = async status=>{
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/coursesStatus/${status}`)
    const data = await res.json()
    return data
}