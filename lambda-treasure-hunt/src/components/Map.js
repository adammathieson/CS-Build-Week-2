import React, {useState, useEffect} from 'react'

import './Map.css'

const Map = ({room}) => {
    const [current, setCurrent] = useState({})

    useEffect(() => {
        setCurrent(room)
    }, [room])

    const createTable = () => {
        let graphMap
        let keys
        let x
        let y
        // Initialize a two dimensional array
        const twoDMap = new Array(70)
        for (let i = 0; i < twoDMap.length; i++) {
            twoDMap[i] = new Array(70)
        }
        for (let i = 0; i < twoDMap.length; i++) {
            for (let j = 0; j < twoDMap.length; j++) {
                    twoDMap[j][i] = <div className="space" ></div>
            }
        }
        // twoDMap.forEach(arr => {
        //     arr.forEach(space => )
        // })
        // twoDMap[25][60] = 'hello'
        // console.log("Empty space???", twoDMap[25][60])
        // console.log("----->", twoDMap[25][60])

        // Check if graphMap is there, if yes set to variable
        if (localStorage.getItem('graphMap')) {
            graphMap = JSON.parse(localStorage.getItem('graphMap'))
            console.log(graphMap)
            keys = Object.keys(graphMap)
            console.log(keys.length)
        }

        keys.map(key => {
            x = graphMap[key].self.coordinates.slice(1,3)
            y = graphMap[key].self.coordinates.slice(4,6)
            console.log(key, x, y)
            twoDMap[y][x] = <div className="space room" key={graphMap[key].self.room_id}>{graphMap[key].self.room_id}</div>
        })

        console.log(twoDMap)

        // twoDMap.forEach(item => {
        //     let count = 70
        //     while (count < 0) {
        //         item.push('🟢')
        //         count--
        //     }
        // })
        
        twoDMap.map(item => console.log(item.length))
        return twoDMap
    }
    

    return (
        <div>
            <h2>The Map</h2>
            <div className="grid-container">
                {createTable()}
            </div>
            
        </div>
    )
}

export default Map
