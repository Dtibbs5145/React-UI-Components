import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div>
            <h2><strong>Get started with React</strong></h2>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in you application.</p>
            <a href='https://www.reactjs.org'>www.reactjs.org</a>
        </div>
    );
};

export default CardContent;