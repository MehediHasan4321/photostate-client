export const getInstractorCourse = async (email) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/instractorCourse/${email}`)
    const data = await res.json()
    return data
}