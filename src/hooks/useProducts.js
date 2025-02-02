import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
      setLoading(false);
    } catch (e) {
      console.error("Error fetching products:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return { products, loading };
};

export default useProducts;
