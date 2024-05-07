import { useGetProductByNameQuery } from "../RTK/./Slices/product";
import { useEffect, useState } from "react";

export function useSearchLogic() {
  const { data } = useGetProductByNameQuery("products");
  const [productsTitle, setProductsTitle] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);


  useEffect(() => {
    if (data) {
      setProductsTitle(data);
    }
  }, [data]);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;

    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
    } else {
      const filteredResults = productsTitle.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
      setShowResults(true);
      
    }
  };

  return {
    searchQuery,
    searchResults,
    showResults,
    setShowResults,
    handleSearchInputChange,
  };
}
