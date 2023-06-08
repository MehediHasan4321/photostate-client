export const getAllCourser = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/courses`)
    const data = await res.json()
    return data
}