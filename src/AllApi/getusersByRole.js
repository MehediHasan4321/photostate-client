export const getUserByRole = async role => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${role}`)
    const data = await res.json()
    return data
}