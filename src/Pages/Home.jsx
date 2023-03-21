import React from "react";

export const Home = () => {
  const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useDtate("");

  async function getResponse() {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProductData(await res);
  }

  useEffect(() => {
    getResponse();
  }, []);

  return <Container></Container>;
};
