import React, {useState} from "react"

const StateObject = () => {
    
    const[name, setName] = useState({firstName: "", lastName: ""})

    return(
        <div>
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value}) }/>
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value}) }/>

            <h1>First Name is {name.firstName}</h1>

            <h1>Last Name is {name.lastName}</h1>
        </div>
    )
}

export default StateObject