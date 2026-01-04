import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getAuthToken } from "./TokenService";



export interface ApiError{
    status: number;
    message: string;
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API + "/api/" || "http://127.0.0.1:5000/api/";

const service = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    timeout: 10000,
    
});

// Interceptor de requisição para adicionar o token dinamicamente
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = getAuthToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de resposta para tratar erros
service.interceptors.response.use(
    response => response,
    (error: AxiosError)=>{
        console.log("error do interceptor: ", error.response?.data);
        const apiError: ApiError ={
            
            status: error.response?.status || 500,
            message: (error.response?.data as {msg: string})?.msg || "Erro ao processar a requisição",
        };
        return Promise.reject(apiError);
    }

)

export default service;
