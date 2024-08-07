import React, { Component } from 'react';

interface ErrorProps {
    error: string;
}

class Error extends Component<ErrorProps> {
    render() {
    const { error } = this.props

    return (
        <p>{error}</p>
    );
    }
};

export default Error;