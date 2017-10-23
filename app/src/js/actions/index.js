import * as types from '../constants/ActionTypes'

export const buttonClick = (text) => {
    return {
        type:types.button_click,
        text
    }
}

export const changeText = (obj) =>{
    return {
        type:types.change_text,
        obj
    }
}

export const loadData = (payload) => {
    return{
        type: types.load_data,
        payload
    }
}

export function fetchObj() {
    return (dispatch) => {
        dispatch(loadingShow())
        setTimeout(function(){
            dispatch(loadData({data:"settimeoutssss"}))
            dispatch(loadingHide())
        }, 6000);
    }
}

export function loadingShow(){
    return {
        type: types.loading_show,
        isShow:true
    }
}

export function loadingHide() {
    return {
        type: types.loading_hide,
        isShow: false
    }
}