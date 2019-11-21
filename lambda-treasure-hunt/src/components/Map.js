import React from 'react'

const Map = ({prev, room, dirToPrev}) => {
    console.log("dirToPrev ?? : ", dirToPrev)
    // Check if graphMap has been added to Local Storage
    if (!localStorage.getItem('graphMap')) {

        const graphMap = {0: {"n": "?", "s": "?", "e": "?", "w": "?"}}

        localStorage.setItem('graphMap', JSON.stringify(graphMap))
    } 

    const graphMap = JSON.parse(localStorage.getItem('graphMap'))
    const keys = Object.keys(graphMap)
    const strID = JSON.stringify(room.room_id)
    console.log("strID: ",strID)

    // If you enter another room log the previous room obj to corresponding direction
    if (room.room_id !== undefined && prev.room_id !== undefined) {
        if (keys.includes(strID)) {
            const value = graphMap[strID][dirToPrev]
            if (value === '?')
            graphMap[strID][dirToPrev] = JSON.stringify(prev)
            localStorage.setItem('graphMap', JSON.stringify(graphMap))
            console.log("room is in graph", value)
        // If it's not there add it to the object
        } else if (!keys.includes(strID)) {

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
