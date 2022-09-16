import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(
    (e) => {
      setArray((prevArray) => {
        if (prevArray.some((item) => item === text)) {
          alert("同じ要素がすでに存在します。");
          return prevArray;
        }
        return [...prevArray, text];
      });
    },
    [text]
  );

  return { text, array, handleChange, handleAdd };
};
