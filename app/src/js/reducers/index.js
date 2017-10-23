import {combineReducers} from 'redux'
import buttonClick from './buttonr'
import commonReducer from './common'
import loadingReducer from './loadingReducer'
export default combineReducers({
    buttonClick,
    commonReducer,
    loadingBar: loadingReducer
})