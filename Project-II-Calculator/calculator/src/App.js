import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <CalculatorDisplay />
        <ButtonContainer>
          <ActionButton text='clear' />
          <NumberButton className='red-button' text='/' />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton className='number-button' text='7' />
          <NumberButton className='number-button' text='8' />
          <NumberButton className='number-button' text='9' />
          <NumberButton className='red-button' text='X' />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton className='number-button' text='4' />
          <NumberButton className='number-button' text='5' />
          <NumberButton className='number-button' text='6' />
          <NumberButton className='red-button' text='-' />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton className='number-button' text='1' />
          <NumberButton className='number-button' text='2' />
          <NumberButton className='number-button' text='3' />
          <NumberButton className='red-button' text='+' />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton text='0' />
          <NumberButton className='red-button' text='=' />
        </ButtonContainer>
      </div>
    )
  }
};

export default App;
