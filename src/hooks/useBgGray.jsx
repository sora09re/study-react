import { useEffect } from "react";

export const useBgGray = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "gray";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
