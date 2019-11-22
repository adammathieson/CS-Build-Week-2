import React, { useState, useEffect } from 'react'

import { fetchMove } from '../actions'
import { useDispatch } from "react-redux"
import { chart } from '../chart'

import Map from './Map'


const Controls = ({room}) => {
    const [prevRoom, setPrevRoom] = useState({})
    const [dirToPrev, setDirToPrev] = useState('')
    const dispatch = useDispatch()

    // const opDir = dir => {
    //     return (
    //         dir === 'n' ? 's'
    //         : dir === 's' ? 'n'
    //         : dir === 'e' ? 'w'
    //         : 'e'
    //     )
    // }

    const handleMove = (dir) => {
        setPrevRoom(room)
        setDirToPrev(dir)
        dispatch(fetchMove(dir))
    }

    useEffect(() => {
        chart(prevRoom, room, dirToPrev)
    }, [prevRoom, room, dirToPrev])


    return (
        <>
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
