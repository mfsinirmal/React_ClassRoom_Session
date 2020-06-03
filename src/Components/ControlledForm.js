import React from "react"

class ControlledForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name: "",
            address: "",
            stateName: "Odisha"
        }
    }

    //nameHandler = (event) => this.setState({name: event.target.value})

    //addressHandler = (event) => this.setState({address: event.target.value})

    //stateNameHandler = (event) => this.setState({ stateName: event.target.value})

    changeHandler = (event) => {
        const target = event.target
        const name = target.name
        this.setState({
            [name]: target.value
        })
    }

    showResultHandler = () => {
        alert("Name is : " + this.state.name + " Address is " + this.state.address + " State name is " + this.state.stateName)
    }




    render(){
        return(
            <form>
                <div>
                    <label>
                        Name
                        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                    </label>                
                </div>
                <div>
                    <label>
                        Address
                        <textarea name="address" value={this.state.address} onChange={this.changeHandler}></textarea>
                    </label>                                
                </div>
                <div>
                    <label>
                        State Name
                        <select name="stateName" value={this.state.stateName} onChange={this.changeHandler}>
                            <option value="Odisha">Odisha</option>
                            <option value="UP">UP</option>
                            <option value="Karnatak">Karnatak</option>
                        </select>
                    </label>                                
                </div>
                <button onClick={this.showResultHandler}>Show Result</button>
            </form>
        )
    }
}

export default ControlledForm