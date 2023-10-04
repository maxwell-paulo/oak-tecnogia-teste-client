import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    value: 0,
    available: false,
  });

  function handleChange(event) {
    const { name, value, type } = event.target;

    const newValue =
      name === "available"
        ? value === "true"
        : type === "number"
        ? parseFloat(value)
        : value;

    setProduct({ ...product, [name]: newValue });

    console.log(product);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/product", product);

      console.log(response);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        type="text"
        value={product.name}
        onChange={handleChange}
        required
      ></input>
      <input
        id="value"
        name="value"
        type="number"
        value={product.value}
        onChange={handleChange}
      ></input>
      <input
        id="description"
        name="description"
        type="text"
        value={product.description}
        onChange={handleChange}
        required
      ></input>
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
      <button type="submit">CRIAR!</button>
    </form>
  );
}

export default CreateProduct;
