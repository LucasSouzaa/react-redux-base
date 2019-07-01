import React, { Component } from 'react';

class Navigation extends Component {

    componentDidMount() {
        console.log('THISSSS PROPS', this.props);

        this.props.teste();
    }

    render() {
        return (
            <div>
                <h1>OI EU SOU A HOME SCREEN: {this.props.isLoading}</h1>
            </div>
        );
    }
}

export default Navigation;
