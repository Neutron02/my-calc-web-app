
import styled from 'styled-components';
import React, { Component } from 'react';
import RefsDemo from './components/RefsDemo';
import calculator from './components/RefsDemo';

// styling container is for anything special I want 
const StyleContainerDiv = styled.div`
font-size: xx-large;
background-color: red;
size:large;
width: auto;
text-align: center;
`;

const StuffUnderWelcomeDiv = styled.div`
background-color: purple;
width: auto;
height: 900px;


`;

const LeftStuffContainer = styled.div`
width:1000px;
height: 900px;
background-color:green;
float:left;

`;



class App extends Component {
  render(){
    return(
      <div className="app">
        <RefsDemo />
      </div>
    );
  }
}
/*
function App() {

  return(
      <div className="app">
        <StyleContainerDiv className="styling-container"> 
          Welcome to my Calculator Webapp
        </StyleContainerDiv>
        <StuffUnderWelcomeDiv className="stuffUnderWelcome-container">
          
          <LeftStuffContainer className="leftStuff-container"> 
idek what I want here yet
          </LeftStuffContainer>
          <CalculatorContainer className="calculator-container">
            <ScreenContainer className="screen">
            </ScreenContainer>
            <ButtonsContainer className="buttons-container">
              <OperationsDiv>
                <TopRowButtons id="x" type="button">x</TopRowButtons>
                <TopRowButtons id="÷" type="button">÷</TopRowButtons>
                <TopRowButtons id="-" type="button">-</TopRowButtons>
                <TopRowButtons id="+" type="button">+</TopRowButtons>
              </OperationsDiv>
              <Three>
                <ThreeBThreeButtons id="7" type="button" >7</ThreeBThreeButtons>
                <ThreeBThreeButtons id="8" type="button" >8</ThreeBThreeButtons>
                <ThreeBThreeButtons id="9" type="button" >9</ThreeBThreeButtons>
                <ThreeBThreeButtons id="4" type="button" >4</ThreeBThreeButtons>
                <ThreeBThreeButtons id="5" type="button" >5</ThreeBThreeButtons>
                <ThreeBThreeButtons id="6" type="button" >6</ThreeBThreeButtons>
                <ThreeBThreeButtons id="1" type="button" >1</ThreeBThreeButtons>
                <ThreeBThreeButtons id="2" type="button" >2</ThreeBThreeButtons>
                <ThreeBThreeButtons id="3" type="button" >3</ThreeBThreeButtons>
                
              </Three>
              <BottomOperationsDiv>
                <BottomRowButtons id="0" type="button">0</BottomRowButtons>
                <BottomRowButtons id="." type="button">.</BottomRowButtons>
                <BottomRowButtons id="clear" type="button">clear</BottomRowButtons>
                <BottomRowButtons id="=" type="button">=</BottomRowButtons>  
              </BottomOperationsDiv>
            </ButtonsContainer>
          </CalculatorContainer>
        </StuffUnderWelcomeDiv>
      </div>
  );
    
}
*/
/*

///multiplyButton.addEventListener('click', () => {
//  console.log('CLICK');
//});

$divideButton.addEventListener('click', () => {
  console.log('CLICK');
});

subtractButton.addEventListener('click', () => {
  console.log('CLICK');
});

addButton.addEventListener('click', () => {
  console.log('CLICK');
});
  
sevenButton.addEventListener('click', () => {
    console.log('CLICK');
});
  
eightButton.addEventListener('click', () => {
    console.log('CLICK');
});
  
nineButton.addEventListener('click', () => {
    console.log('CLICK');
});

fourButton.addEventListener('click', () => {
  console.log('CLICK');
});
  
fiveButton.addEventListener('click', () => {
    console.log('CLICK');
});
  
  sixButton.addEventListener('click', () => {
    console.log('CLICK');
});
  
  oneButton.addEventListener('click', () => {
    console.log('CLICK');
});

twoButton.addEventListener('click', () => {
  console.log('CLICK');
});
  
threeButton.addEventListener('click', () => {
    console.log('CLICK');
});
  
zeroButton.addEventListener('click', () => {
    console.log('CLICK');
});
  
dotButton.addEventListener('click', () => {
    console.log('CLICK');
});

clearButton.addEventListener('click', () => {
  console.log('CLICK');
});
  
equalsButton.addEventListener('click', () => {
    console.log('CLICK');
});
*/
export default App;
