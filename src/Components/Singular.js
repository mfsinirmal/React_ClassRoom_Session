import React, {Component} from "react"

class Singular extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            length: 1
        }
    }

    executeAfterStateChange(){
        console.log(this.state.count)
    }

    changeCount(){
        this.setState({count: this.state.count+1}, this.executeAfterStateChange)
    }

    render(){        
        return(
        <div>
            <h1>Count is : {this.state.count}</h1>
            <h2>Length is : {this.state.length}</h2>
            <button onClick={() => this.changeCount()}>Increase Count</button>
        </div>
        )
    }
}

export default Singular