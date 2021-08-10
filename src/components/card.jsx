import styled from 'styled-components';
export const Card = styled.div`
  max-width: 300px;
  height: 300px;
  background-color: black;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.29);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 10px 30px;
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 10px 3px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 10px 20px;
  }
`;
export default Card;
