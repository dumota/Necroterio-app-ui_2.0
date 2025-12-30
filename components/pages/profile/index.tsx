"use client";
import { useAuth } from "@/providers/AuthProvider";
import { jwtDecode } from "jwt-decode";


export default function ProfilePageComponent() {
    
    const { token } = useAuth();
    const tokenDecoded = jwtDecode(token || "");

    return (
        <div>
            <h1>Profile</h1>
            {token}
            {tokenDecoded.exp && new Date(tokenDecoded.exp * 1000).toLocaleDateString()}
        </div>
    )
}