import React, { useState, useEffect } from 'react'

import { fetchMove } from '../actions'
import { useDispatch } from "react-redux"
import { chart } from '../chart'

import Map from './Map'


const Controls = ({room}) => {
    const [prevRoom, setPrevRoom] = useState({})
    const [dirToPrev, setDirToPrev] = useState('')
    // const [dirOfNext, setDirOfNext] = useState('?')
    const dispatch = useDispatch()
    console.log("=======>", prevRoom, room)

    // const opDir = dir => {
    //     return (
    //         dir === 'n' ? 's'
    //         : dir === 's' ? 'n'
    //         : dir === 'e' ? 'w'
    //         : 'e'
    //     )
    // }


    const handleMove = (dir) => {
        if (localStorage.getItem('graphMap')) {
            const graphMap = JSON.parse(localStorage.getItem('graphMap'))
            console.log("????", graphMap[room.room_id], room.room_id, graphMap)
            if (graphMap[room.room_id][dir] !== undefined) {
                const nextRoom = graphMap[room.room_id][dir]
                const strId = JSON.stringify(nextRoom.room_id)

                console.log('We gettin there________________', nextRoom.room_id)
                setPrevRoom(room)
                setDirToPrev(dir)
                dispatch(fetchMove(dir, strId))
            }
            } else {
            console.log("didn't predict")
            setPrevRoom(room)
            setDirToPrev(dir)
            dispatch(fetchMove(dir))
        }
        
    }

    useEffect(() => {
        // setPrevRoom(room)
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
            <Map />
        </>
    )
}

export default Controls
