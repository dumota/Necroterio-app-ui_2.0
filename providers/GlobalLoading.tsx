"use client";
import { Loader } from "@/components/retroui/Loader";
import { createContext, useContext, useState } from "react";

interface GlobalLoadingProps {
  show: () => void;
  hide: () => void;
}

const GlobalLoadingContext = createContext<GlobalLoadingProps>({
  show: () => {},
  hide: () => {},
});

export const GlobalLoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <GlobalLoadingContext.Provider value={{ show, hide }}>
      {children}
      {visible && (
        <div className="fixed inset-0 flex justify-center items-center z-10 bg-neutral-600 h-screen w-screen opacity-25">
            <Loader/>
        </div>
  
      )}
    </GlobalLoadingContext.Provider>
  );
};

export function useGlobalLoading() {
  return useContext(GlobalLoadingContext);
}