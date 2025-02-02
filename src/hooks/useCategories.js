import { useEffect, useState } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchAPI = async () => {
    try {
      const { data } = await axios.get("/products/categories");
      setCategories(data);
    } catch (e) {
      console.error("Error fetching categories:", e);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return categories;
};

export default useCategories;
