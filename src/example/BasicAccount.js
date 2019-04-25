import React from 'react';
import './dom2.css';
import './dom4.css';
import Account1 from "./Account1.js"
import Accounts from "./Accounts.js"


class BasicAccount extends React.Component {

	constructor() {
		super();
		this.state = {
			accountName:null,
			accountBalance:null,
			input1:null,
			input2:0
			
		}
		this.savingAccount = new Account1(0,"",0);
		
	}
	onchangeName = (e) => {
		console.log('changing',e.target.value);
		this.setState({
			input1:e.target.value
		})
		}	
	onchangeblanace = (e) => {
		console.log('changing',Number(e.target.value));
		this.setState({
		input2:Number(e.target.value)
		})
		}		
     newDeposit = () => {
        let newTakeBalance = this.state.input2;
     	let newBalance=this.savingAccount.deposit(newTakeBalance);
     	console.log(this.savingAccount.balance);
     	this.setState({
     		accountBalance:this.savingAccount.toBalance()
     	})
     }

      newWithDraw = () => {
        let newTakeWithDraw = this.state.input2;
     	let newBalance=this.savingAccount.withDraw(newTakeWithDraw);
     	console.log(this.savingAccount.balance);
     	this.setState({
     		accountBalance:this.savingAccount.toBalance()
     	 })
     }
     changeName = () => {
     	let name = this.state.input1;
     	this.savingAccount.accountName = name;
     	console.log(this.savingAccount.accountName);
     	this.setState({
     		accountName:this.savingAccount.accountName
     	})
     



     }
  
	


render() {
		return(
			<div className="classDiv">
			<p>Account Name:{this.state.accountName}</p>
			<input onChange={this.onchangeName} id="input1" type="text"></input>
			<p>Account Balance:{this.state.accountBalance}</p>
			<input onChange={this.onchangeblanace} id="input2" type="number" ></input>
			<br/>
			<button onClick={this.newDeposit}>Deposit</button>
			<button onClick={this.newWithDraw}>Withdraw</button>
			<button onClick={this.changeName}>Rename</button><br/>
			
			</div>
			

		
		);
	}

}

export default BasicAccount;
