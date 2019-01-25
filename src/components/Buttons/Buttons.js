import React from 'react';
import './Buttons.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus, faSyncAlt);

const Buttons = (props) => {
    return (
        <div className="buttons">
            <button className="btn__add" onClick={props.addPoint}>
                <FontAwesomeIcon icon="plus" />
            </button>
            <button className="btn__clear" onClick={props.clear}>
                <FontAwesomeIcon icon="sync-alt" />
            </button>
            <button className="btn__subtract" onClick={props.subtractPoint}>
                <FontAwesomeIcon icon="minus" />
            </button>
        </div>
    );
}

export default Buttons;