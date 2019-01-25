import React from 'react';
import './Result.css';

const Result = (props) => {
    return (
        <div className="result">
            <span>{props.result}</span>
        </div>
    );
}

export default Result;