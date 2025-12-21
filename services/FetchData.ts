import service from "./ApiInstance";

const postApi = async <T>(url:string, post : T) => {
    const response = await service.post(url, post);
    return response.data;
}

const getApi = async <T>(url:string) : Promise<T> => {
    const response = await service.get<T>(url);
    return response.data;
}

export { postApi, getApi };