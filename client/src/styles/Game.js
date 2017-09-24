import styled from 'styled-components';

export const GameStyle = styled.div`
  text-align: center;
  h1, h3{
    margin: 4px;
  }
`;

export const GameBoardStyles = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #326273;
  height: 80vh;
  width: 90vw;
  margin: 0 auto;
  color: white;
`;

export const TileStyle = styled.div`
  box-sizing: border-box;
  border: 3px solid #326273;
  border-radius: 10%;
  background: #062C3D;
  height: 16.67%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.active ? "1rem" : "2rem"};
  font-family: 'Lato';
  font-weight: 700;
  color: ${props => props.question ? "#00A7E1" : "FFF"}
`;

export const CategoryStyle = styled.div`
  height: 100%;
  width: 20%;
`;
