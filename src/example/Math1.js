import React from 'react';
import './dom3.css';
import './dom2.css';
import math from "./math";

class Math1 extends React.Component {

  constructor()	{
  	super();
 	this.state = { userInput1:0,
 				   userInput2: 0,
 				   output: 0
				}
 this.onGetUserInput1 = this.onGetUserInput1.bind(this);
 this.onGetUserInput2 = this.onGetUserInput2.bind(this);
 this.onGetUserOutput = this.onGetUserOutput.bind(this);
 this.buttonClick = this.buttonClick.bind(this);
 	
 	}

onGetUserInput1(e) {
	console.log("onGetUserInput1",e.target.value);
	this.setState({userInput1: e.target.value});

 	}
 
 onGetUserInput2(e) {
 	console.log("onGetUserInput1",e.target.value);
	this.setState({userInput2: e.target.value});
 	}
 
 onGetUserOutput(e) {
 	console.log("onGetUserInput1",e.target.value);
 	this.setState({output: e.target.value});
	}
   
   
   

  buttonClick(e)
  {
   if(e.target.id==="btnPlus") {
   	 this.setState({output: math.sum(parseInt(this.state.userInput1),parseInt(this.state.userInput2))});
   }
    else if(e.target.id==="btnSub") {
     this.setState({output: math.subtraction(parseInt(this.state.userInput1),parseInt(this.state.userInput2))});
    }
    else if(e.target.id==="btnDiv") {
     this.setState({output: math.divide(parseInt(this.state.userInput1),parseInt(this.state.userInput2))});
    }
    else if(e.target.id==="btnMul") {
     this.setState({output: math.multiply(parseInt(this.state.userInput1),parseInt(this.state.userInput2))});
    }
    else if(e.target.id==="btnClr") {
     this.setState({  output:0,
     				userInput2:0,
     				userInput1:0
     });

    }





  }
  

	render(){
		
		return (<div className="divClass1">
			<h4 className="Inputstyling"> Hello from MathComp</h4>
			<input className="Inputstyling" onChange={this.onGetUserInput1} id="inputValue"/><br/>
			<input className="Inputstyling" onChange={this.onGetUserInput2} id="inputAnswer"/><br/>
			<button id="btnPlus" onClick={this.buttonClick}>+</button>
			<button id="btnSub" onClick={this.buttonClick}>-</button>
			<button id="btnDiv" onClick={this.buttonClick}>/</button>
			<button id="btnMul" onClick={this.buttonClick}>*</button>
			<button id="btnClr" onClick={this.buttonClick}>CE</button>
			<input className="Inputstyling" onChange={this.buttonClick} id="inputValue" value={this.state.output}/><br/>
			
			</div>
			
			);
    


}
}



export default Math1;

