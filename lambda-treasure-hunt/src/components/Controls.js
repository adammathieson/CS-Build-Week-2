import React, { useState } from 'react'

import { fetchMove } from '../actions'
import { useDispatch } from "react-redux"

import Map from './Map'


const Controls = ({room}) => {
    // const [move, setMove] = useState({"direction": ""})
    const [prevRoom, setPrevRoom] = useState({})
    const [dirToPrev, setdirToPrev] = useState('')
    const dispatch = useDispatch()
    console.log("previous Room --> ", prevRoom)
    
    // console.log("Room from props --> ", room)

    // useEffect(() => {
    //     setPrevRoom(room)
    // }, [dispatch])  
    const opDir = dir => {
        return (
            dir === 'n' ? 's'
            : dir === 's' ? 'n'
            : dir === 'e' ? 'w'
            : 'e'
        )
    }

    const handleMove = (dir) => {
        setPrevRoom(room)
        setdirToPrev(opDir(dir))
        dispatch(fetchMove(dir))
    }


    return (
        <>
            {/* <div className="control-container">
                <button className="game-btn" onClick={() => dispatch(fetchMove("n"))}>N</button>
                <button className="game-btn" onClick={() => dispatch(fetchMove("e"))}>E</button>
                <button className="game-btn" onClick={() => dispatch(fetchMove("s"))}>S</button>
                <button className="game-btn" onClick={() => dispatch(fetchMove("w"))}>W</button>
            </div> */}
            <div className="control-container">
                <button className="game-btn" onClick={() => handleMove("n")}>N</button>
                <button className="game-btn" onClick={() => handleMove("e")}>E</button>
                <button className="game-btn" onClick={() => handleMove("s")}>S</button>
                <button className="game-btn" onClick={() => handleMove("w")}>W</button>
            </div>
            <Map prev={prevRoom} room={room} dirToPrev={dirToPrev}/>
        </>
    )
}

export default Controls
