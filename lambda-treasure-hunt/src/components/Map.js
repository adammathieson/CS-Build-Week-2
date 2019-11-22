import React from 'react'

import './Map.css'

const Map = () => {

const dummyData = []
let count = 4900
while (count  > 0) {
    dummyData.push(count)
    count--
}

console.log(dummyData.length)

    return (
        <div>
            <h2>The Map</h2>
            <div className="grid-container">
                {dummyData.map(item => (
                    <div key={item}>🟢</div>
                ))}
            </div>
            
        </div>
    )
}

export default Map
