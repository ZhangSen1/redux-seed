import React, { PropTypes } from 'react'
import Divc from './Divc'

export default class Buttonc extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let dom = this.refs.btn;
        this.props.buttonClick(this.props.text == "123" ? "456" : "123");
        // this.props.loadData({data:this.props.data == "no data" ? "123456" : "no data"});

        this.props.fetchObj();
    }

    render() {
        return (
            <div>
                <Divc text={this.props.data}></Divc>
                <button ref="btn" onClick={this.handleClick} >{this.props.text}</button>
            </div>
        );
    }
}
