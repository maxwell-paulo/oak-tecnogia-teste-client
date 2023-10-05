import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import {
  FormButton,
  Form,
  StyledContainer,
  FormFiedls,
  Label,
  Text,
} from "./StyledComponents";

function CreateProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    value: "R$",
    available: false,
  });

  const [valueInCents, setValueInCents] = useState(0);

  function handleChange(event) {
    const { name, value } = event.target;

    const newValue = name === "available" ? value === "true" : value;

    if (name === "value") {
      let valueInReais = value;

      if (value.includes("R$")) {
        valueInReais = value.replace("R$", "");
      }

      if (!value.includes(",")) {
        setValueInCents(parseFloat(valueInReais) * 100);
      }

      if (valueInCents !== 0 && valueInReais.includes(",")) {
        valueInReais = valueInReais.replace(",", "");
        setValueInCents(parseFloat(valueInReais));
      } else if (valueInCents !== 0 && valueInReais.includes(".")) {
        valueInReais = valueInReais.replace(".", "");
        setValueInCents(parseFloat(valueInReais));
      }
    }

    setProduct({ ...product, [name]: newValue });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const productToSend = { ...product, value: valueInCents };

    try {
      await api.post("/product", productToSend);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledContainer>
      <Form onSubmit={handleSubmit}>
        <Text>Cadastrar Produto</Text>
        <FormFiedls>
          <Label htmlFor="name">Nome do Produto:</Label>
          <input
            id="name"
            name="name"
            type="text"
            value={product.name}
            onChange={handleChange}
            required
          ></input>
        </FormFiedls>
        <FormFiedls>
          <Label htmlFor="value">Valor:</Label>
          <input
            id="value"
            name="value"
            type="text"
            value={product.value}
            onChange={handleChange}
          ></input>
        </FormFiedls>
        <FormFiedls>
          <Label htmlFor="description">Tipo de Produto:</Label>
          <input
            id="description"
            name="description"
            type="text"
            value={product.description}
            onChange={handleChange}
            required
          ></input>
        </FormFiedls>
        <FormFiedls>
          <Label htmlFor="available">Em Estoque?</Label>
          <select
            id="available"
            name="available"
            type="text"
            value={product.available}
            onChange={handleChange}
            required
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </FormFiedls>
        <FormButton type="submit">CRIAR!</FormButton>
      </Form>
    </StyledContainer>
  );
}

export default CreateProduct;
