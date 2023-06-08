export const uploadImage = async image => {
    const fromData = new FormData()
    fromData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
    const res = await fetch(url, {
        method: "POST",
        body: fromData
    })
    const data = await res.json()
    return data
}