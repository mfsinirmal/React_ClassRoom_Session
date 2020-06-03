import {BUY_BOOK, ADD_STOCK} from "./bookTypes"

const InitialState = {
    numberOfBooks: 10
}


const bookReducer = (state = InitialState, action) => {
    switch(action.type){
        case BUY_BOOK: return {
            ...state, numberOfBooks: state.numberOfBooks-1
        }
        case ADD_STOCK: return {
            ...state, numberOfBooks: state.numberOfBooks+1
        }
        default: return state
    }
}

export default bookReducer