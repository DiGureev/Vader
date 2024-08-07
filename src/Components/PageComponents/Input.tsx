import React, { Component } from 'react';

interface InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

class Input extends Component<InputProps> {
    render() {
    const { onChange, placeholder } = this.props

    return (
        <input
            type="text"
            onChange={onChange}
            placeholder={placeholder}
        />
    );
    }
};

export default Input;