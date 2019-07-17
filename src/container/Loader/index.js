import React, { Component } from 'react';
import Loaderx from 'react-loader-spinner'
import { connect } from 'react-redux'
import PropsType from 'prop-types'

export class Loader extends Component {

    constructor(props){
        super(props)
        this.visible = {
            display : "block"
        }
        this.hide = {
            display : "none"
        }

    }


    render() {
        return (
            <div style={this.props.display ? this.visible : this.hide }>
                <Loaderx
                        type="Bars"
                        color="#00BFFF"
                        height="100"	
                        width="100"
                    />
            </div>
        );
    }
}

Loader.PropsType = {
    display : PropsType.bool.isRequired
}

Loader.defaultProps = {
    display : true
}

const mapStateToProps = state => ({
    display : state.weather.loader
})
export default connect(mapStateToProps) (Loader);
