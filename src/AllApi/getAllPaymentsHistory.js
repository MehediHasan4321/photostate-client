export const getAllPaymentsHistory = async ()=>{
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/allPayments`)
    const data = await res.json()
    return data
}