import React from 'react';

interface InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({onChange, placeholder}) => {
    return (
        <input
            type="text"
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;