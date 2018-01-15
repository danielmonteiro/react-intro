import React, { Component } from 'react';

export default class ClassBased extends Component {
    render() {
        return (
            <div>{this.props.prop1}</div>
        )
    }
}