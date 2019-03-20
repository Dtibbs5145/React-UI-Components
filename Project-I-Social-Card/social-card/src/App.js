import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardContainer from './components/CardComponents/CardContainer';


const App = () => {
  return (
    <div>
      <ImageThumbnail />
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;