import LinkedList  from './LinkedList';

test('Testing the LinkedList Class', () => {
	console.log('Testing the LinkedList class constructor method');
	const list = new LinkedList();
	expect(list.head.amount).toBe(0);
	// console.log(list);

	console.log('Testing the insertAfter method');
	list.insertAfter('a', 1);
	expect(list.current.amount).toBe(1);
	list.insertAfter('b', 2);
	expect(list.current.amount).toBe(2);
	list.insertAfter('c', 3);
	expect(list.current.amount).toBe(3);
	// console.log(list);
	
	console.log('Testing the firstPosition method')
	list.firstPosition();
	expect(list.current.subject).toBe('');
	
	console.log('Test inserting a new Node between Head and a');
	list.insertAfter('d', 4);
	expect(list.current.amount).toBe(4);
	// console.log(list);
	
	console.log('Testing the nextPosition method');
	list.nextPosition();
	expect(list.current.subject).toBe('a');

	console.log('Test inserting a new Node after using nextPosition mthod');
	list.insertAfter('e', 5);
	expect(list.current.amount).toBe(5);
	// console.log(list);
	
	console.log('Testing the lastPosition method');
	list.lastPosition();
	expect(list.current.amount).toBe(0);
	// console.log(list);
	
	console.log('Testing the previousPosition method');
	list.previousPosition();
	expect(list.current.amount).toBe(3);
	// console.log(list);

	console.log('Test inserting a new Node after using nextPosition mthod');
	list.insertAfter('f', 6);
	expect(list.current.amount).toBe(6);
	// console.log(list);
	
	console.log('Testing the deleteNode method');
	list.deleteNode();
	expect(list.current.subject).toBe('c');
	// console.log(list);

	console.log('Testing the listTotal method');
	list.listTotal();
	// console.log(list.amountTotal);
	expect(list.listTotal()).toBe(15);
	console.log(list);
	
	console.log('Test inserting a new Node after using listTotal mthod');
	list.insertAfter('g', 7);
	expect(list.current.amount).toBe(7);
	// console.log(list);

	console.log('Testing the listTotal method');
	list.listTotal();
	// console.log(list.amountTotal);
	expect(list.listTotal()).toBe(22);
	// console.log(list);

	console.log('Test inserting a new Node after using listTotal mthod');
	list.insertAfter('h', 8);
	expect(list.current.amount).toBe(8);
	// console.log(list);

	console.log('Testing the listTotal method');
	list.listTotal();
	// console.log(list.amountTotal);
	expect(list.listTotal()).toBe(30);
	console.log(list);
	
});