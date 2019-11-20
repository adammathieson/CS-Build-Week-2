import React from 'react';

import { fetchInit } from '../actions'
import { useSelector, useDispatch} from "react-redux"

// import axios from 'axios'

import Room from './room'


// const key = process.env.REACT_APP_KEY
// const url = process.env.REACT_APP_URL
// const header = {headers: {Authorization: `Token ${key}`}}

const Game = () => {
  const currentRoom = useSelector(state => state.gameReducer.currentRoom)
  const dispatch = useDispatch()
  console.log("currentRoom: ", currentRoom)

  // const handleClick = () => {
  //   axios
  //   .get(`${url}init/`, header)
  //   .then(res => {
  //       // console.log(res.data)
  //       setCurrentRoom(res.data) 
  //   })
  //   .catch(err => {
  //       console.log(err)
  //   })
  // }

  return (
    <>
      <h2>The Map</h2>
        <button onClick={() => dispatch(fetchInit())}>Start Game</button>
        <Room room={currentRoom}/>
    
    </>
  );
}

export default Game
