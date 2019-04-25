// import Account1 from  "./Account1";



// test('Test the Account functions', () => {
// 	console.log('Test 1');
// 	const obj = new Account1(200,"Harpreet",1); 
// 	expect(obj.balance).toBe(200);
// 	expect(obj.id).toBe(1);
// 	expect(obj.accountName).toBe("Harpreet");
// });

// test('Test the Account functions', () => {
// 	console.log('Test 2 ');
// 	const obj = new Account1(200,"Harpreet");
// 	obj.deposit(20);
// 	expect(obj.balance).toBe(220);
// });

// test('Test the Account functions', () => {
// 	console.log('Test 3 ');
// 	const obj = new Account1(200,"Harpreet");
// 	obj.withDraw(5);
// 	expect(obj.balance).toBe(195);
// });


// test('Test the Account functions', () => {
// 	console.log('Test 4 ');
// 	const obj = new Account1(200,"Harpreet");
// 	obj.toBalance();
// 	expect(obj.balance).toBe(200);

// });
// // Test for Account Controller
import Account1 from './Account1';

// Test #1 - Create class and test account (savingsAccount)
        // - ensure code creates account
test('Test the account creator', () => {
    console.log('Testing create account');
    const savingsAccount = new Account1 (0, "Ian", 200);
    expect(savingsAccount.id).toBe(0);
    expect(savingsAccount.accName).toBe("Ian");
    expect(savingsAccount.accBalance).toBe(200);

    console.log('Testing Deposit Method');
    savingsAccount.deposit(20);
    expect(savingsAccount.accBalance).toBe(220);

    console.log('Testing Withdraw Method');
    savingsAccount.withdraw(30);
    expect(savingsAccount.accBalance).toBe(190);

    console.log('Testing Balance Method');
    savingsAccount.getBalance();
    expect(savingsAccount.accBalance).toBe(190);
});


