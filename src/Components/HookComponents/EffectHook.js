import React, {useState, useEffect} from "react"

const EffectHook = () => {
    
    const[count, countHandler] = useState(0)
    const[name, setName] = useState({firstName: ""})

    useEffect(() => {
        console.log("UseEffect is executing")
        document.title = "Count is " + count
    }, [count])

    return(
        <div>
            <button onClick={() => countHandler(count+1)}>Count is {count}</button>

           <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value}) }/>

            <h1>First Name is {name.firstName}</h1>
        </div>
        
    )
}

export default EffectHook