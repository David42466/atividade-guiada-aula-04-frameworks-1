import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const TituloProduto = styled.h3`
  color: #333;
`;

const PrecoProduto = styled.p`
  color: #15803d;
  font-weight: bold;
  font-size: 1.2rem;
`;

export default function CardProduto({ nome, preco }) {
  return (
    <CardContainer>
      <TituloProduto>{nome}</TituloProduto>
      <PrecoProduto>R$ {preco}</PrecoProduto>
    </CardContainer>
  );
}