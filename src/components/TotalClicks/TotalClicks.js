import React from 'react';

const TotalClicks = (props) => {

    const style = {
        textAlign: 'center',
        fontSize: '30px',
        paddingBottom: '10px'
    }

    return (
        <p style={style}>Total count of clicks: {props.totalClick}</p>
    )
}

export default TotalClicks;