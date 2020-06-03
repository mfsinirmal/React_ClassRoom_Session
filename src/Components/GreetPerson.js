import React from "react"

const GreetPerson = (props) => {
    return(
        <div>
            <h1>{props.companyName}</h1>            
            <h2>{props.phone}</h2>
            {props.children}
        </div>
    )
}


// class GreetPerson extends React.Component{
//     render(){
//         return(
//         <div>
//             <h1>{this.props.companyName}</h1>            
//             <h2>{this.props.companyLocation}</h2>
//             <p>{this.props.children}</p>
//         </div>            
//         )
//     }
// }

export default GreetPerson