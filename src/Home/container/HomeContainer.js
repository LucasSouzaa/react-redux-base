import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import HomeScreen from '../screen';

class HomeContainer extends Component {
    render() {
        return (
            <HomeScreen
                isLoading={this.props.isLoading}
                teste={this.props.teste}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.home.isLoading,

});

export default connect(mapStateToProps, actions)(HomeContainer);
