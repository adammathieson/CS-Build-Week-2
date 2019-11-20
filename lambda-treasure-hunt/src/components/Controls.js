import React, { useState } from 'react'

import { fetchMove } from '../actions'
import { useDispatch } from "react-redux"


const Controls = ({room}) => {
    // const [move, setMove] = useState({"direction": ""})
    const [prevRoom, setPrevRoom] = useState({})
    const dispatch = useDispatch()
    console.log("previous Room --> ", prevRoom)
    
    // console.log("Room from props --> ", room)

    // useEffect(() => {
    //     setPrevRoom(room)
    // }, [dispatch])  

    const handleMove = (dir) => {
        setPrevRoom(room)
        dispatch(fetchMove(dir))
    }


    return (
        // <div className="control-container">
        //     <button className="game-btn" onClick={() => dispatch(fetchMove("n"))}>N</button>
        //     <button className="game-btn" onClick={() => dispatch(fetchMove("e"))}>E</button>
        //     <button className="game-btn" onClick={() => dispatch(fetchMove("s"))}>S</button>
        //     <button className="game-btn" onClick={() => dispatch(fetchMove("w"))}>W</button>
        // </div>
        <div className="control-container">
            <button className="game-btn" onClick={() => handleMove("n")}>N</button>
            <button className="game-btn" onClick={() => handleMove("e")}>E</button>
            <button className="game-btn" onClick={() => handleMove("s")}>S</button>
            <button className="game-btn" onClick={() => handleMove("w")}>W</button>
        </div>
    )
}

export default Controls
