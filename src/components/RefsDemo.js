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
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {screenText: "",
    id: "",
    numInputs: 0,
    firstNum: 0,
    secondNum: 0,
    operator: "",
    operatorClicked: false

  }
  }    
  handleClick(str) {
    console.log("str is: " + str);
    var txt = document.getElementById(str).innerHTML;
    
    console.log("txt is: " + txt);
    this.setState({
      screenText: this.state.screenText + txt
    });
  }
  
  operatorPressed(str){
    this.setState({operator: str,
      firstNum: this.state.screenText,
      screenText: this.state.screenText + ' ' + str + ' ',
      operatorClicked: true

    });
    
  }
  multiply(num1, num2){
    var result = num1 * num2;
  }

  divide(num1, num2){
    var result = num1/num2;
  }
  subtract(num1, num2){
    var result = num1 - num2; 
  }
  add(num1, num2){
    result = num1 + num2;
  }
  parseStringForSecondNum(str){
    var letter;
    var i = 0;

    
  }
  equalsPressed(){
    if(this.state.operator === 'x'){
      this.state.secondNum = 
    }else if(this.state.operator === '÷'){

    }else if (this.state.operator === '-'){

    }else if(this.state.operator ===  '+'){

    }
  }

  clearPressed(){
    this.setState({
      screenText: ""
    });
  }

    render(){
        return(
          <CalculatorContainer className="calculator-container">
              <ScreenContainer className="screen">
                {this.state.screenText}
              </ScreenContainer>
            <ButtonsContainer className="buttons-container">
              <OperationsDiv>
                <TopRowButtons onClick={() => this.operatorPressed('x')} id="x" type="button">x</TopRowButtons>
                <TopRowButtons onClick={() => this.operatorPressed('÷')} id="÷" type="button">÷</TopRowButtons>
                <TopRowButtons onClick={() => this.operatorPressed('-')} id="-" type="button">-</TopRowButtons>
                <TopRowButtons onClick={() => this.operatorPressed('+')} id="+" type="button">+</TopRowButtons>
              </OperationsDiv>
              <Three>
                <ThreeBThreeButtons onClick={() => this.handleClick('7')} id="7" type="button" >7</ThreeBThreeButtons>
                <ThreeBThreeButtons onClick={() => this.handleClick('8')} id="8" type="button" >8</ThreeBThreeButtons>
                <ThreeBThreeButtons onClick={() => this.handleClick('9')} id="9" type="button" >9</ThreeBThreeButtons>
                <ThreeBThreeButtons onClick={() => this.handleClick('4')} id="4" type="button" >4</ThreeBThreeButtons>
                <ThreeBThreeButtons onClick={() => this.handleClick('5')} id="5" type="button" >5</ThreeBThreeButtons>
                <ThreeBThreeButtons onClick={() => this.handleClick('6')} id="6" type="button" >6</ThreeBThreeButtons>
                <ThreeBThreeButtons onClick={() => this.handleClick('1')} id="1" type="button" >1</ThreeBThreeButtons>
                <ThreeBThreeButtons onClick={() => this.handleClick('2')} id="2" type="button" >2</ThreeBThreeButtons>
                <ThreeBThreeButtons onClick={() => this.handleClick('3')} id="3" type="button" >3</ThreeBThreeButtons>
                
              </Three>
              <BottomOperationsDiv>
                <BottomRowButtons onClick={() => this.handleClick()} id="0" type="button">0</BottomRowButtons>
                <BottomRowButtons onClick={() => this.handleClick()} id="." type="button">.</BottomRowButtons>
                <BottomRowButtons onClick={() => this.clearPressed()} id="clear" type="button">clear</BottomRowButtons>
                <BottomRowButtons onClick={() => this.handleClick()} id="=" type="button">=</BottomRowButtons>  
              </BottomOperationsDiv>
            </ButtonsContainer>
          </CalculatorContainer>
        );
    }

    if(){

    }
}
export default Calculator;