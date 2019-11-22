


export const chart = (prev, current, direction) => {
    console.log(prev.room_id, current.room_id)
    if (!current.exits) {
        console.log("no room object")
        return -1
    } else if (current.room_id === prev.room_id) {
        console.log('you did not go anywhere')
        return -1
    } else if (direction === '') {
        console.log('no direction')
        return -1
    }

 // Check if graphMap has been added to Local Storage
    // console.log(current.errors.length)
    if (!localStorage.getItem('graphMap')) {

        // const graphMap = {0: {"n": {"room_id":10,"title":"A misty room","description":"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.","coordinates":"(60,61)","elevation":0,"terrain":"NORMAL","players":[],"items":[],"exits":["n","s","w"],"cooldown":15,"errors":[],"messages":["You have walked north."]}, "s": {"room_id":2,"title":"A misty room","description":"You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction.","coordinates":"(60,59)","elevation":0,"terrain":"NORMAL","players":[],"items":[],"exits":["n","s","e"],"cooldown":15,"errors":[],"messages":["You have walked south."]}, "e": "?", "w": "?"}}
        // const graphMap = {0: {"n": "?", "s": "?", "e": "?", "w": "?"}}
        const graphMap = {}
        localStorage.setItem('graphMap', JSON.stringify(graphMap))
        console.log("nothing in local storage")
    } 

    const graphMap = JSON.parse(localStorage.getItem('graphMap'))
    const keys = Object.keys(graphMap)
    const strID = JSON.stringify(current.room_id)
    // console.log("strID: ",strID)

    // If you enter another room log the previous room obj to corresponding direction
    if (keys.includes(strID)) {

        const value = graphMap[strID][direction]

        if (value === '?') {
            graphMap[current.room_id][direction] = prev
            localStorage.setItem('graphMap', JSON.stringify(graphMap))
            console.log(`Room id:${current.room_id} added room id: ${prev.room_id} to direction ${direction}`)
        }
    } else if (!keys.includes(strID)) {
        // current.exits()
        graphMap[current.room_id] = {}

        current.exits.map(exit => (
            graphMap[current.room_id][exit] = '?')
        )
        // current.exits.map(exit => graphMap[strID][exit] = '?')
        graphMap[current.room_id][direction] = prev

        localStorage.setItem('graphMap', JSON.stringify(graphMap))

        // graphMap[strID][direction] = JSON.stringify(prev)
        console.log("should add current object with direction obj value", current.room_id)

    } else {
        console.log("Game not initialized", current.room_id, prev.room_id)
    }


    // localStorage.setItem('graphMap', JSON.stringify(graphMap))
        
    // console.log(keys[0])
    // console.log(JSON.stringify(room.room_id))
    // check if current room is in graphMap




    // const test = JSON.parse(localStorage.getItem('graphMap'))
    // test[1] = {"n": "?", "s": "?", "e": "?", "w": "?"}
    // localStorage.setItem('graphMap', JSON.stringify(test))
    // console.log(test)

    // const keys = Object.keys(test)
    // console.log(keys)
    }
