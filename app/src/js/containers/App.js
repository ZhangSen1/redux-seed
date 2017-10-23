import React from 'react'
import ButtonContainer from './ButtonContainer'
import Buttonc from '../components/Buttonc.jsx'
import Loading from '../components/Loading'
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Loading/>
                <ButtonContainer/>
            </div>
        )
    }
}