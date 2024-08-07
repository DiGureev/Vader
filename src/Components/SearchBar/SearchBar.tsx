import React, { Component } from 'react';
import Input from '../PageComponents/Input';
import Logo from './Logo';

import './style.css'

interface SearchProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchBar extends Component<SearchProps> {
    render() {
    const { onChange} = this.props

    return (
        <div id="search-bar">
            <Logo/>
            <Input
                    onChange={onChange}
                    placeholder="Search for a character..."
                />
        </div>
    );
    }
};

export default SearchBar;