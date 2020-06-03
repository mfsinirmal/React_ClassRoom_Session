import React from "react"
import WithCount from "./WithCount"

class ClickDemoCount extends React.Component{

    render(){
        return(
            <button onClick={this.props.countHandler}>Clicked {this.props.counter} times</button>
        )
    }
}

export default  WithCount(ClickDemoCount)