export const getCourseOrderById = async id => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/courseOrderById/${id}`, {
        method: "GET",
        headers: {
            authorization: `beares ${localStorage.getItem('access_token')}`
        }
    })
    const data = await res.json()
    return data

}