import {BUY_BOOK, ADD_STOCK} from "./bookTypes"


export const buyBook = () => {
    return({
        type: BUY_BOOK
    })    
}

export const addStock = () => {
    return({
        type: ADD_STOCK
    })    
}