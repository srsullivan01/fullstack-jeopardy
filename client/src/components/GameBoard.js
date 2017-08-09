import React from 'react';
import Category from './Category';
import { GameBoardStyles } from '../styles/Game';


const GameBoard = (props) => {
  return (
    <div>
    <GameBoardStyles>
      {props.categories.map((category, i) => {
        return <Category key={i} submitAnswer={props.submitAnswer} category={category} />
      })}
    </GameBoardStyles>
  </div>
  );
};

export default GameBoard;
