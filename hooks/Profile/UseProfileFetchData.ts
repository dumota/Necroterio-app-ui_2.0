"use client"
import { getProfileById } from "@/services/UserService";
import { IProfile } from "@/types/User";
import { useQuery } from "@tanstack/react-query";

export interface IProfileProps{
    id: string;
}

export const UseProfileFeatchData = ({ id } : IProfileProps)=>{
    return useQuery({
        queryKey: ["profile", id],
        queryFn: ()=> getProfileById(id) as Promise<IProfile>,
        staleTime: 1000 * 60 * 10,
    });
}



