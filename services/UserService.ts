import { IProfile } from "@/types/User";
import { getApi } from "./FetchData"



const getProfileById = async(id: string)=>{
    try{
        const response = await getApi<IProfile>(`user/${id}`);
        return response;
    }catch(err){
        return err;
    }
}

export {getProfileById};