import React from "react"
import {connect} from "react-redux"
import {buyBook, addStock} from "../Redux"

function BookStore(props){
    return(

        <div>
            <h1>Number of books in store : {props.numberOfBooks}</h1>
            <button onClick={props.buyBook}>Buy a books</button>
            <button onClick = {props.addStock}>Add a book in stock</button>
        </div>

    )
}


const mapStateToProps = states => {
    return{
        numberOfBooks: states.numberOfBooks
    }
}


const mapDispatcherToProps = dispatch => {
    return{
        buyBook: () => dispatch(buyBook()),
        addStock: () => dispatch(addStock())
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(BookStore)