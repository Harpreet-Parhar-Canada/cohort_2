import LinkedList  from './LinkedList';

test('Testing the LinkedList Class', () => {
	console.log('Testing the LinkedList class constructor method');
	const list = new LinkedList();
	expect(list.head.amount).toBe(0);
	// console.log(list);

	console.log('Testing the insertAfter method');
	list.insertAfter('Toronto', 5928040);
	expect(list.current.amount).toBe(5928040);
	list.insertAfter('Montreal', 4098927);
	expect(list.current.subject).toBe('Montreal');
	list.insertAfter('Vancouver', 2463431);
	expect(list.current.subject).toBe('Vancouver');
	list.insertAfter('Calgary', 1392609);
	expect(list.current.amount).toBe(1392609);
	// console.log(list);
	
	console.log('Testing the firstPosition method')
	list.firstPosition();
	expect(list.current.subject).toBe('');
	
	console.log('Test inserting a new City between Head and Toronto');
	list.insertAfter('Ottawa', 1000000);
	expect(list.current.subject).toBe('Ottawa');

	console.log('Testing the nextPosition method');
	list.nextPosition();
	expect(list.current.subject).toBe('Toronto');
	list.nextPosition();
	expect(list.current.amount).toBe(4098927);
	list.nextPosition();
	expect(list.current.subject).toBe('Vancouver');
	// console.log(list);

	console.log('Testing the lastPosition method');
	list.lastPosition();
	expect(list.current.amount).toBe(0);
	// console.log(list);

	console.log('Testing the previousPosition method');
	list.previousPosition();
	expect(list.current.subject).toBe('Calgary');
	console.log(list.current.subject);
	
	console.log('Testing the deleteNode method');
	list.deleteNode();
	expect(list.current.subject).toBe('Vancouver');
	list.deleteNode();
	expect(list.current.subject).toBe('Montreal');
	// console.log(list);

	console.log('Testing the listTotal method');
	list.listTotal();
	// console.log(list.amountTotal);
	expect(list.amountTotal).toBe(11026967);

});