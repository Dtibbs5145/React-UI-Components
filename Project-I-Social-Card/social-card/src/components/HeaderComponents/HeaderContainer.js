import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';


const HeaderContainer = props => {
    return (
        <div>
           <HeaderContent />
           <HeaderTitle />
        </div>
    );
};

export default HeaderContainer;