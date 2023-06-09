export const saveOrder = async (id, user,course) => {
    const order = {
        course,
        user:{
            name:user.displayName,
            email:user.email,
            image:user.photoURL
        },
        orderId:id
    }
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/courseOrder`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(order)
    })
    const data = await res.json()
    return data
}