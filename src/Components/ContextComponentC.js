import React from "react"
import ContextComponent from "./ConextComponent"

class ContentComponentC extends React.Component{
    render(){
        return(
            <ContextComponent.Consumer>
                {username => {
                    return <h1> {username} </h1>
                }}
            </ContextComponent.Consumer>
        // <h1>{this.context}</h1>
        )
    }
}

//ContentComponentC.contextType = ContextComponent
export default ContentComponentC