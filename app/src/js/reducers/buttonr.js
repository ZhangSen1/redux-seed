import * as actionType from '../constants/ActionTypes'

const initialState  = {text: '123'};

const buttonClick = (state = initialState, action) => {
    switch (action.type){
        case actionType.button_click:
            return {text: action.text}
        default:
            return state;
    }
}

export default buttonClick