import React from 'react';

import { fetchInit, fetchStatus } from '../actions'
import { useSelector, useDispatch} from "react-redux"

import Room from './Room'
import Status from './Status'
import Controls from './Controls'



const Game = () => {
  const currentRoom = useSelector(state => state.gameReducer.currentRoom)
  const status = useSelector(state => state.gameReducer.status)
  const dispatch = useDispatch()

  return (
    <>
    <div className="info">
      <button onClick={() => dispatch(fetchInit())}>Start Game</button>
        <Room room={currentRoom}/>

        <button onClick={() => dispatch(fetchStatus())}>Get Status</button>
        <Status status={status}/>
    </div>
        

        <Controls room={currentRoom}/>
    </>
  );
}

export default Game
