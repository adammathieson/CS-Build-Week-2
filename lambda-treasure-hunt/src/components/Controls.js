import React, { useState, useEffect } from 'react'

import { fetchMove } from '../actions'
import { useDispatch, useSelector } from "react-redux"
import { chart } from '../chart'

import Map from './Map'


const Controls = ({room}) => {
    // const [move, setMove] = useState({"direction": ""})
    const [prevRoom, setPrevRoom] = useState({})
    const [dirToPrev, setDirToPrev] = useState('')
    const dispatch = useDispatch()

    

    

    const opDir = dir => {
        return (
            dir === 'n' ? 's'
            : dir === 's' ? 'n'
            : dir === 'e' ? 'w'
            : 'e'
        )
    }

    const handleMove = async (dir) => {
        setPrevRoom(room)
        setDirToPrev(opDir(dir))
        dispatch(fetchMove(dir))
        // if (gameError.length > 0) {
        //     console.log(gameError[0])
        // } else {
        //     chart(prevRoom, room, dirToPrev)
        // }
    }

    useEffect(() => {
        chart(prevRoom, room, dirToPrev)
    }, [room])


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
