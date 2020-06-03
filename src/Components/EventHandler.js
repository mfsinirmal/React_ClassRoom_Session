import React from "react"

// const EventHandler = ()=> {
//     const clickHandler = () => alert("Me Clicked")

//     return(
//         <div>
//             <button onClick={clickHandler}>Click Me</button>
//         </div>
//     )

// }


class EventHandler extends React.Component{

    clickHandler = (e, id, name) => alert(name + " id is " + id)

    render(){
        return(
        <div>
            <button onClick={(e)=>this.clickHandler(e, 10, "Product 1")}>Click Me</button>
        </div>            
        )
    }
}

export default EventHandler