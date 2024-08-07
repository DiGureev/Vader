
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './loading.css'

interface LoadingProps {
    display: string;
}

class Loading extends Component<LoadingProps> {

    render() {
    const { display } = this.props

    return (
        <div style={{display: display}} className='loading-div'>
            <FontAwesomeIcon icon={faSpinner} id='loading-icon'/>
            <h1>Loading</h1>
        </div>
    );
    }
};

export default Loading;

