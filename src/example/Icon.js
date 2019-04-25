import React from 'react';
import Logo from './user.png';
import Cross from './calculator.png';
import BankMul from './bankmul.png';
import Bank from './bank1.png';
import './dom2.css';
import Math1 from "./Math1.js";
import Picture from "./Picture.js";
import BasicAccount from "./BasicAccount.js";
import AccountMultiple from "./AccountMultiple.js";
import CommunityComp from "./CommunityComp.js"
import globe from "./globe.png";

class Icon extends React.Component
{
	constructor() {
		super();
		this.state={
			imagevalue:null};

 this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    if(event.target.id==="image1") {
    this.setState({imagevalue:<Picture/>});
	}
 	else if(event.target.id==="image2") {
 	this.setState({imagevalue:<BasicAccount/>});
  	 }
    else if(event.target.id==="image3"){
    this.setState({imagevalue:<Math1/>});
    }
     else if(event.target.id==="image4"){
    this.setState({imagevalue:<AccountMultiple/>});
    }
    else if(event.target.id==="image5"){
    this.setState({imagevalue:<CommunityComp/>});
    }

  	}

render(){
	return(

		<div className="divClass2">
		
			<div className="App" align="center" onClick={this.handleChange}>
				<h1 align="center" > </h1>
 
	   			<img src={Logo} className="colorimg" id="image1" alt="first" />
	        	<img src={Bank} className="colorimg" id="image2" alt="second"/>
	        	<img src={Cross} className="colorimg" id="image3" alt="third"/>
	        	<img src={BankMul} className="colorimg" id="image4" alt="fourth"/>
	        	<img src={globe} className="colorimg" id="image5" alt="fifth"/>
	        </div>

	     	<div className="divClass" align="center">
	    		 {this.state.imagevalue} 
	    	 </div>

	    </div>	
);
}
}
export default Icon;