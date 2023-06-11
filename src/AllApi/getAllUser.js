
export const getAllUser = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
        method: "GET",
        headers: {
            authorization: `beares ${localStorage.setItem('access_token')}`
        }

    })
    const data = await res.json()
    return data
}



