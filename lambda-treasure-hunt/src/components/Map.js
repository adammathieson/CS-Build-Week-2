import React from 'react'

const Map = ({prev, room, dirToPrev}) => {
    console.log("dirToPrev ?? : ", dirToPrev)
    // const graphMap = {0: {"n": "?", "s": "?", "e": "?", "w": "?"}}
    // localStorage.setItem('graphMap', JSON.stringify(graphMap))

    const graphMap = JSON.parse(localStorage.getItem('graphMap'))
    let keys = Object.keys(graphMap)

    if (room.room_id !== undefined && prev.room_id !== undefined) {
        if (keys.includes(JSON.stringify(room.room_id))) {
            const value = graphMap[JSON.stringify(room.room_id)][dirToPrev]
            if (value === '?')
            graphMap[JSON.stringify(room.room_id)][dirToPrev] = JSON.stringify(prev.room_id)
            localStorage.setItem('graphMap', JSON.stringify(graphMap))
            console.log("room is in graph", value)

        } else {
            console.log("room NOT in graph", room)
        }
    } else {
        console.log("Game not initialized", room.room_id, prev.room_id)
    }
        
    // console.log(keys[0])
    // console.log(JSON.stringify(room.room_id))
    // check if current room is in graphMap




    // const test = JSON.parse(localStorage.getItem('graphMap'))
    // test[1] = {"n": "?", "s": "?", "e": "?", "w": "?"}
    // localStorage.setItem('graphMap', JSON.stringify(test))
    // console.log(test)

    // const keys = Object.keys(test)
    // console.log(keys)
    console.log(prev.room_id)

    return (
        <div>
            <h2>The Map</h2>
        </div>
    )
}

export default Map
