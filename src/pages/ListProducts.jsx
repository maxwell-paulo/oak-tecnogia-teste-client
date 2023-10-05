import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Product } from "../components/Product";
import {
  StyledContainer,
  Content,
  Button,
  Text,
  OrderButton,
} from "./StyledComponents";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await api.get("/product");

        setProducts([...res.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.value - b.value;
      } else {
        return b.value - a.value;
      }
    });

    setProducts(sortedProducts);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <StyledContainer>
        <h1>Lista de produtos cadastrados</h1>
        <OrderButton onClick={sortProducts}>Ordenar por Valor</OrderButton>
        <Content>
          <Text>Produto</Text>
          <Text>Valor</Text>
        </Content>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              value={product.value}
              id={product.id}
            />
          );
        })}
        <Button href="/add-product">Adicionar Produto</Button>
      </StyledContainer>
    </>
  );
}

export default ListProducts;
