import React from 'react';
import './Buttons.css';
import Button from './Button/Button'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus, faSyncAlt);

const Buttons = (props) => {
    return (
        <div className="buttons">
            <Button
                btnClass="btn__add"
                click={props.addPoint}
                icon={faPlus}
            />
            <Button
                btnClass="btn__clear"
                click={props.clear}
                icon={faSyncAlt}
            />
            <Button
                btnClass="btn__subtract"
                click={props.subtractPoint}
                icon={faMinus}
            />
        </div>
    );
}

export default Buttons;