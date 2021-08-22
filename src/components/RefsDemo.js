import React, { Component } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
width:920px;
background-color: grey;
display:inline-block;
height: 900px;
float:right;
`;

const ScreenContainer = styled.div`
background-color:blue;
height: 200px;
width: 950px;
text-align: center;

`;

const ButtonsContainer = styled.div`
background-color:pink;
width: 950px;
height:700px;
`;

const OperationsDiv = styled.div`
width:950px;
height:140px;
background-color:black;
`;

const Three = styled.div`
width: 950px;
height:420px;
background-color: red;
`;

const BottomOperationsDiv = styled.div`
width: 950px;
height: 140px;
background-color:yellowgreen;

`;

const TopRowButtons = styled.button`
width:237px;
height: 140px;
`;
const ThreeBThreeButtons = styled.button`
width:316px;
height:140px;
`;

const BottomRowButtons = styled.button`
width: 237px;
height:140px;
`;

class Calculator extends Component {
    click(){
        console.log('clikc');
    }

    
    render(){
        return(
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
                <ThreeBThreeButtons onclick="click"id="7" type="button" >7</ThreeBThreeButtons>
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
        );
    }
}
export default Calculator;