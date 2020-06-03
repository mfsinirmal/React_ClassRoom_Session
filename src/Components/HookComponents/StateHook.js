import React, {useState} from "react"

const StateHook = () => {
    
    const[count, countHandler] = useState(0)

    return(
        <button onClick={() => countHandler(count+1)}>Count is {count}</button>
    )
}

export default StateHook