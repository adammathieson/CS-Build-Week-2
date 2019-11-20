import React from 'react'

const Room = ({room}) => {
    return (
        <div>
            <h2>You are currently in: </h2>
            <h2>Room id: {room.room_id}</h2>
            <p>Title: {room.title}</p>
            <p>Description: {room.description}</p>
            <p>Items: {room.items}</p>
            <p>Terrain: {room.terrain}</p>
            <p>Exits: {room.exits}</p>
        </div>
    )
}

export default Room
