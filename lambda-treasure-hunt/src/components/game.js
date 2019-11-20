import React from 'react';

import { fetchInit } from '../actions'
import { useSelector, useDispatch} from "react-redux"

import Room from './Room'
import Controls from './Controls'



const Game = () => {
  const currentRoom = useSelector(state => state.gameReducer.currentRoom)
  const dispatch = useDispatch()

  return (
    <>
      <h2>The Map</h2>
        <button onClick={() => dispatch(fetchInit())}>Start Game</button>
        <Room room={currentRoom}/>
        <Controls room={currentRoom}/>
    </>
  );
}

export default Game
