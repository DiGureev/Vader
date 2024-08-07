import React, { Component } from 'react';
import logoImg from '../../images/Star_Wars_Logo.svg'

class Logo extends Component {
    render() {
        return (
            <img src={logoImg} alt="logo" style={{ width: '60px' }} />
        );
    }
};

export default Logo;