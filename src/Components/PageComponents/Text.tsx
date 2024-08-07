import React, { Component } from 'react';
import axios from 'axios';

interface TextProps {
    text: string;
    title: string;
}


class Text extends Component<TextProps> {

    
    render() {
        const { text, title } = this.props
    return (
        <h3>{title}: {text}</h3>
    );
    }
};

export default Text;