import React from 'react'

import './Map.css'

const Map = () => {

const twoDMap = new Array(70)
for (let i = 0; i < twoDMap.length; i++) {
    twoDMap[i] = new Array(70)
}

if (localStorage.getItem('graphMap')) {
    const graphMap = JSON.parse(localStorage.getItem('graphMap'))
    console.log(graphMap)
    const keys = Object.keys(graphMap)
    console.log(keys.length)
}




// twoDMap.forEach(item => {
//     let count = 70
//     while (count < 0) {
//         item.push('🟢')
//         count--
//     }
// })

twoDMap.map(item => console.log(item.length))

    return (
        <div>
            <h2>The Map</h2>
            <div className="grid-container">
                {/* {twoDMap.map(item => (
                    <div key={item}>🟢</div>
                ))} */}
            </div>
            
        </div>
    )
}

export default Map
