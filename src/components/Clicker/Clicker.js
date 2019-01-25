import React from 'react';
import './Clicker.css';

import Result from '../Result/Result';
import Buttons from '../Buttons/Buttons';

const Clicker = (props) => {
    return (
        <div className="clicker">
            <Result result={props.result} />
            <Buttons
                addPoint={props.plusHandle}
                subtractPoint={props.minusHandle}
                clear={props.refreshHandle}
            />
        </div>
    );
}

export default Clicker;