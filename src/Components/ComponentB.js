import React from "react"

class ComponentB extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
        console.log("ComponentB - Constructor")
    }

    static getDerivedStateFromProps(state, props){
        console.log("ComponentB - getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("ComponentB - componentDidMount")
    }   

    render(){                
        console.log("ComponentB - render")
        return <h1>Component B</h1>
    }
}

export default ComponentB