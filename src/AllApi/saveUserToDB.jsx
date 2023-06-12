export const saveUserToDB = async (user,role='student') => {
    const saveUser = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        role:role
    }
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${user.email}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(saveUser)
    })
    const data = await res.json()
    return data
}

