"use client";
import { UseProfileFeatchData } from "@/hooks/Profile/UseProfileFetchData";
import { useAuth } from "@/providers/AuthProvider";
import { decodeToken } from "@/services/TokenService";

export default function ProfilePageComponent() {

    const { token } = useAuth();
    const tokenDecoded = decodeToken(token || "");
   
    const {data ,isLoading} = UseProfileFeatchData(
        {id : tokenDecoded?.id || ""}
    );



    
 
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1>Profile</h1>
      </div>
      <div>
      </div>
      

    </div>
  );
}
