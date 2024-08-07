
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './loading.css'

interface LoadingProps {
    display: string;
}

const Loading: React.FC<LoadingProps> = ({display}) => {

    return (
        <div style={{display: display}} className='loading-div'>
            <FontAwesomeIcon icon={faSpinner} id='loading-icon'/>
            <h1>Loading</h1>
        </div>
    );

};

export default Loading;

