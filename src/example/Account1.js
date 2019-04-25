// class Account1{


// 	constructor(id,accountName,balance) {
	
// 	this.balance = balance;
// 	this.accountName = accountName;
// 	this.id=id;
	
// 	}

// 	deposit(amount) {
// 		this.balance = this.balance+amount;
// 	}

// 	withDraw(amount) {
// 		this.balance = this.balance-amount;
// 	}

// 	toBalance() {
// 		return this.balance;
// 	}
	
	
	
// }



// export default Account1;

class Account {
    constructor(id, accName, accBalance) {
        this.id = id;
        this.accName = accName;
        this.accBalance = accBalance;
    }

    deposit(amount) {
        this.accBalance = parseInt(this.accBalance) + parseInt(amount);
    }

    withdraw(amount) {
        this.accBalance = parseInt(this.accBalance) - parseInt(amount);
    }

    getBalance() {
        return this.accBalance;
    }
}

export default Account;