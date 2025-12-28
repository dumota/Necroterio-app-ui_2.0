import axios, { AxiosError } from "axios";

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
        // Authorization : `Bearer ${localStorage.getItem("token")}`
    },
    timeout: 10000,
    
});

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
