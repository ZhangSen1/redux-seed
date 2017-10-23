import * as actionType from '../constants/ActionTypes'

let initialState = {data: "no data"}

const commonReducer = (state = initialState, action) => {
    switch (action.type){
        case actionType.load_data:
            return {data: action.payload.data}
        default:
            return state;
    }
}

export default commonReducer