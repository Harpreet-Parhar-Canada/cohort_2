import React from 'react';
import './dom2.css';
import './dom4.css';

import Account1 from './Account1';

class Account extends React.Component {

constructor() {
	super()
	this.state = {
	   display : [],
	// 	accountName:null,
	// 	accountBalance:null

	}
	this.addingAccount = this.addingAccount.bind(this);

}
addingAccount(e) {
	console.log("checking");
	let savedState = this.state.display;
	let newDisplay = <div className="classDiv"></div>
	savedState.push(newDisplay)
	this.setState({ display: savedState})
	// this.setState({
	// 	accountName:"Harpreet",
	// 	accountBalance:200
	// })
	// // let accountInfo = new Account1(this.state.accountBalance,this.state.accountName);
	
	// let newDiv=
	// 	<div className="classDiv">
	// 	 <p>Account Name:{this.state.accountName}</p>
	// 	 <p>Account Balance:{this.state.accountBalance}</p><br/>
	// 	 <button>Deposit</button>
	// 	 <button>Withdraw</button><br/>
	// 	 <button>Rename</button>
		
	// 	</div>
	// 	if(e.target.id = "adding") {
	// 		this.setState({display: newDiv})
	// 	}
		

	}


render() {
		return(
			<div className="divClass1">
				<header></header>
				
				<button onClick={this.addingAccount} id="adding" className="button1">Add Account</button>
			
				{this.state.display.map (
					(value) => <div>{value}</div>
				)}	

			</div>
		);
	}

}
export default Account;