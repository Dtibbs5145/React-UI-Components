import React from 'react';

const ButtonContainer = props => {
    return (
        <div className='button-container'>
            {props.children}
        </div>
    );
};

export default ButtonContainer;