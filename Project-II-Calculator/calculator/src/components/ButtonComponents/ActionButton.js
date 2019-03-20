import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className='three-quarter-buttons'>
            <button className='clear'>{props.text}</button>
        </div>
    );
};

export default ActionButton;