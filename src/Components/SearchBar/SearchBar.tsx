import React from 'react';
import Input from '../PageComponents/Input';
import Logo from './Logo';

import './style.css'

interface SearchProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchProps> = ({onChange}) => {

    return (
        <div id="search-bar">
            <Logo/>
            <Input
                    onChange={onChange}
                    placeholder="Search for a character..."
                />
        </div>
    );
};

export default SearchBar;