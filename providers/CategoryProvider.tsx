"use client";
import { getCategories } from "@/services/CategoryService";
import { ICategory, ICategoryResponse } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface CategoryContextType {
    categories: ICategory[];
    setCategories: (categories: ICategory[]) => void;
}
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);
export function CategoryProvider({ children }: { children: React.ReactNode }) {
    const { data } = useQuery<ICategoryResponse>({
        queryKey: ['categories'],
        queryFn: () => getCategories(),
    });
    return (
        <CategoryContext.Provider value={{ categories: data?.categories ?? [], setCategories: () => {} }}>
            {children}
        </CategoryContext.Provider>
    )
}
export function useCategory() {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
}