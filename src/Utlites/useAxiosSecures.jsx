
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import axios from 'axios';
import { useEffect } from 'react';

const useAxiosSecures = () => {

    const { logOut } = useAuth()
    const navigate = useNavigate()

    const axiosSerure = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        axiosSerure.interceptors.request.use(config => {
            const token = localStorage.getItem('access_token')
            if (token) {
                config.headers.Authorization = `bearer ${token}`
            }
            return config
        });
        axiosSerure.interceptors.response.use(response => response, async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        })
    }, [navigate, axiosSerure])
    return [axiosSerure]

};

export default useAxiosSecures;