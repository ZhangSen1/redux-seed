import Buttonc from '../components/Buttonc.jsx'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {buttonClick, loadData, fetchObj} from '../actions/index'

const mapStateToProps = (state) => {
    return {
        text: state.buttonClick.text,
        data: state.commonReducer.data
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         buttonClick: bindActionCreators(buttonClick, dispatch)
//     }
// }

let actions = {
    buttonClick,
    loadData,
    fetchObj
}

const ButtonContainer = connect(mapStateToProps, {...actions})(Buttonc)

export default ButtonContainer
