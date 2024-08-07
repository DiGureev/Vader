import React from 'react';

interface TextProps {
    text: string;
    title: string;
}

const Text: React.FC<TextProps> = ({text, title}) => {

    return (
        <h3>{title}: {text}</h3>
    );
};

export default Text;