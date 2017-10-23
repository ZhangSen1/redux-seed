import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

const startSize = 0.02;

export class Loading extends React.Component {
    constructor( props ) {
        super( props )

        this.incTimeout = null
        this.started = false

        this.state = {
            // started: false,
            isShow: false,
            status: 0,
            loadingBarWidth: '0%',
            loadingText: '1%'
        }

        // this.start.bind(this);
    }

    // componentDidMount(){
    //      if (this.props.isShow){
    //
    //          this.start()
    //
    //      }else{
    //          this.started = false
    //      }
    // }

    componentWillReceiveProps( nextProps ) {
        if ( nextProps.isShow ) {
            this.setState( { isShow: true } );
            this.start()
        } else {
            this.complete()
            this.started = false
        }
    }

    start() {

        if ( this.started ) {
            return;
        }

        this.started = true
        this.launch( this.props.startSize );

    }

    launch( n ) {
        if ( !this.started ) {
            return;
        }

        let pct = (n * 100) + '%'
        let tmpText = parseInt( (n * 100) ) + "%";

        this.setState( { loadingBarWidth: pct, loadingText: tmpText, status: n } )
        let _this = this;
        clearTimeout( this.incTimeout )
        this.incTimeout = setTimeout( function () {
            _this.simulateProgress();
        }, 250 );

    }

    simulateProgress() {
        if ( this.state.status >= 1 ) {
            return;
        }

        let rnd = 0;

        let stat = this.state.status;
        if ( stat >= 0 && stat < 0.25 ) {
            // Start out between 3 - 6% increments
            rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
        } else if ( stat >= 0.25 && stat < 0.65 ) {
            // increment between 0 - 3%
            rnd = (Math.random() * 3) / 100;
        } else if ( stat >= 0.65 && stat < 0.75 ) {
            // increment between 0 - 2%
            rnd = (Math.random() * 2) / 100;
        } else if ( stat >= 0.75 && stat < 0.99 ) {
            // finally, increment it .5 %
            rnd = 0.005;
        } else {
            // after 99%, don't increment:
            rnd = 0;
        }

        let pct = this.state.status + rnd;

        this.launch( pct )
    }

    complete() {
        this.launch( 1 )
        let _this = this

        setTimeout( function () {
            _this.setState( { isShow: false } );
        }, 100 );
    }

    buildloadingBarStyle() {
        return {
            width: this.state.loadingBarWidth
        }
    }

    // buildStyle(){
    //     return {
    //         display: this.state.isShow ? "block" : "none"
    //     }
    // }

    render() {
        const loadingBarStyle = this.buildloadingBarStyle()
        // const style = this.buildStyle()

        return this.state.isShow ? (
            <div id="mapped-routing-loading" className="mapped-routing-loading">
                <div id="loadingbar-wrapper" className="loadingbar-wrapper">
                    <div id="loading-bar">
                        <div ref="loadingBar" style={loadingBarStyle} className="bar"></div>
                    </div>
                    <span className="load-text">{this.state.loadingText}</span>
                </div>
            </div>
        ) : (null)
    }
}

Loading.defaultProps = {
    style: {},
    className: undefined,
    startSize: 0.02,
    isShow: false
}


const mapStateToProps = ( state ) => ({
    isShow: state.loadingBar.isShow
})

export default connect( mapStateToProps )( Loading )