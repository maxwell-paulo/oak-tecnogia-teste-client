import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Product } from "../components/Product";
import { StyledContainer, Content, Button, Text } from "./StyledComponents";
function ListProducts() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <StyledContainer>
        <h1>Lista de produtos cadastrados</h1>
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
