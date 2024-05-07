import { useState, useEffect } from "react";
import { useGetProductByNameQuery } from "../RTK/./Slices/product";

export function useGetData(productName) {
  const { data, isLoading, isError } = useGetProductByNameQuery(productName);
  const [dataName, setDataName] = useState([]);

  useEffect(() => {
    if (data) {
      setDataName(data);
    }
  }, [data, productName, setDataName]);

  return { dataName, isLoading, isError };
}
