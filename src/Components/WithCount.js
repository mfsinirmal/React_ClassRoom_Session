import React from "react"

const WithCount = (OriginalComponent) => {

    class ExtendedComponent extends React.Component{
        constructor(){
            super()
            this.state={
                count: 0
            }
        }
    
        countHandler = () => {
            this.setState({ count: this.state.count + 1})
        }
    
        render(){
            return(
                <OriginalComponent 
                counter={this.state.count} countHandler={this.countHandler} />
            )
            }
    }    
    return ExtendedComponent
}

export default WithCount