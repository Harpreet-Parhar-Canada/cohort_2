import NodeLinked from './NodeLinked';

test('Testing the Node Class', () => {
	console.log('Testing the Node class constructor method');
	const obj = new NodeLinked('Edmonton', 959576, null,null);
	expect(obj.subject).toBe('Edmonton');
	expect(obj.amount).toBe(959576);
	expect(obj.next).toBe(null);
	expect(obj.previous).toBe(null);

	console.log('Testing the Show Method');
	expect(obj.show()).toBe('Edmonton 959576')
});