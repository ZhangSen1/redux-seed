import * as actionType from '../constants/ActionTypes'

const initialState = {isShow: false}

const loadingReducer = (state = initialState, action) => {
    switch (action.type){
        case actionType.loading_show:
        case actionType.loading_hide:
            return {isShow: action.isShow}
        default:
            return state;
    }
}

export default loadingReducer