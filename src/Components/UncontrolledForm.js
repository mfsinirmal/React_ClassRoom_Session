import React from "react"

class UncontrolledForm extends React.Component{
    constructor(props){
        super(props)
        this.nameInput = React.createRef()
    }

    clickHandler = (event) => {
        alert("Name is "+ this.nameInput.current.value)
    }

    render(){
        return(
            <form>
                <div>
                    <label>
                        Name
                        <input type="text" ref={this.nameInput} />
                    </label>
                </div>
                <button onClick={this.clickHandler}>Show Result</button>
            </form>
        )
    }
}

export default UncontrolledForm