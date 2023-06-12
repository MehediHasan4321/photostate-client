export const getInstractorCourse = async (email,status) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/instractorCourse/${email}?status=${status}`)
    const data = await res.json()
    return data
}