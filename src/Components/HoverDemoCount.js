import React from "react"
import WithCount from "./WithCount"
class HoverDemoCount extends React.Component{

    render(){
        return(
            <h1 onMouseOver={this.props.countHandler}>Clicked {this.props.counter} times</h1>
        )
    }
}

export default WithCount(HoverDemoCount)