import React from 'react';
import './Button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
    return (
        <button className={props.btnClass} onClick={props.click}>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    );
}

export default Button;