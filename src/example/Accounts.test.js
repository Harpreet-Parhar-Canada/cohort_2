// import Account1 from './Account1';
// import Accounts from './Accounts';

// test('Test the Accounts Controller Constructor', () => {
// 	console.log('Testing the Accounts Constructor');
// 	let accts = new Accounts();
// 	let counter = 0
// 	expect(accts.accountList.length).toBe(5);

// 	console.log('Testing the showAccount method');
// 	expect(accts.accountList.length).toBe(5);

// 	console.log('test the addAccount method');
// 	accts.addAccount(counter,'Savings', 2000);
// 	expect(accts.accountList[counter].accName).toBe('Savings');
// 	expect(accts.accountList[counter].id).toBe(0);
// 	expect(accts.accountList[counter].accBalance).toBe(2000);
// 	counter++;
// 	accts.addAccount(counter, 'Chequing',2500);
// 	expect(accts.accountList[counter].accName).toBe('Chequing');
// 	expect(accts.accountList[counter].id).toBe(1);
// 	expect(accts.accountList[counter].accBalance).toBe(2500);
// 	counter++;
// 	accts.addAccount(counter,'TFSA', 5500);
// 	expect(accts.accountList[counter].accName).toBe('TFSA');
// 	expect(accts.accountList[counter].id).toBe(2);
// 	expect(accts.accountList[counter].accBalance).toBe(5500);
	
// 	expect(accts.accountList.length).toBe(3);

// 	console.log('Testing the getAccountsTotal Method');
// 	accts.getAccountsTotal();
// 	expect(accts.accTotal).toBe(10000);

// 	console.log('Testing the getHighestAccount Method');
// 	accts.getHighestAccount();
// 	expect(accts.sortHighestAccount[0].accBalance).toBe(5500);

// 	console.log('Test the getLowestAccount Method');
// 	accts.getLowestAccount();
// 	expect(accts.sortLowestAccount[0].accBalance).toBe(2000);

// 	console.log('Test the Deposit Method');
// 	accts.deposit(1, 250);
// 	expect(accts.accountList[1].accBalance).toBe(2750);

// 	console.log('Test the Withdraw Method');
// 	accts.withdraw(2, 500);
// 	expect(accts.accountList[2].accBalance).toBe(5000);

// 	console.log('Test the Name Account Method');
// 	accts.rename(0, 'Ian Savings');
// 	expect(accts.accountList[0].accName).toBe('Ian Savings');

// 	console.log('Test the Remove Account Method');
// 	accts.removeAccount(1);
// 	expect(accts.accountList.length).toBe(2);
// 	expect(accts.accountList[1].accName).toBe('TFSA');
	

// });
import Account1 from './Account1';
import Accounts from './Accounts';
test('Test the Accounts Controller Constructor', () => {
    console.log('Testing the Accounts Constructor');
    let accts = new Accounts();
    console.log('Testing the showAccount method');
    expect(accts.accountList.length).toBe(5);
    console.log('test the addAccount method');
   console.log(accts.accountList[0])
    expect(accts.accountList[0].accName).toBe('Checking');
    expect(accts.accountList[0].id).toBe(0);
    expect(accts.accountList[0].accBalance).toBe("1000");
    
    console.log('Testing the getAccountsTotal Method');
    accts.getAccountsTotal();
    expect(accts.accTotal).toBe(15000);
    console.log('Testing the getHighestAccount Method');
    expect(accts.getHighestAccount().accBalance).toBe("5000");
    console.log('Test the getLowestAccount Method');
    expect(accts.getLowestAccount().accBalance).toBe("1000");
    console.log('Test the Deposit Method');
    accts.deposit(1, 100);
    expect(accts.accountList[1].accBalance).toBe(2100);
    console.log('Test the Withdraw Method');
    accts.withdraw(2, 500);
    expect(accts.accountList[2].accBalance).toBe(2500);
    console.log('Test the Name Account Method');
    accts.rename(0, 'Ian Savings');
    expect(accts.accountList[0].accName).toBe('Ian Savings');
    console.log('Test the Remove Account Method');
    accts.removeAccount(1);
    expect(accts.accountList.length).toBe(4);
    expect(accts.accountList[1].accName).toBe('TFSA');
    
});

