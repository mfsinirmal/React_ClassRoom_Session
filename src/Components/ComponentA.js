import React from "react"
import ComponentB from "./ComponentB"

class ComponentA extends React.Component{
    constructor(){
        super()
        // this.state = {
        //     name: ""
        // }
        console.log("ComponentA - Constructor")
    }

    // static getDerivedStateFromProps(state, props){
    //     console.log("ComponentA - getDerivedStateFromProps")
    //     return null
    // }

    // componentDidMount(){
    //     console.log("ComponentA - componentDidMount")
    // }   

    render(){                
        console.log("ComponentA - render")
        return (
        <div>
            <h1>Component A</h1>
            <ComponentB/>
        </div>
        )
    }
}

export default ComponentA