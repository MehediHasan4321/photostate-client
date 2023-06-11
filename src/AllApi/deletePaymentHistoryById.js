export const deletePaymentHistoryById = async id => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/paymentHistory/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    return data
}