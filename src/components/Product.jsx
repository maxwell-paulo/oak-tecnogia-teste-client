import PropTypes from "prop-types";
import { StyledContainer, Content, Text } from "./StyledComponents";

export function Product(props) {
  const { name, value, id } = props;
  const formatedValue = value / 100;

  return (
    <StyledContainer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Content id={id}>
        <Text>{name}</Text>
        <Text>
          {formatedValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </Content>
    </StyledContainer>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
