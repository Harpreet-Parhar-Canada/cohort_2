import NodeLinked from './NodeLinked';

class LinkedList {
	constructor() {
		this.head = new NodeLinked('', 0);
		this.tail = new NodeLinked('', 0);
		this.current = this.head;

		this.head.previous = null;
		this.head.next = this.tail;
		this.tail.previous = this.head;
		this.tail.next = null;
		
	}

	insertAfter (subject, amount, next, previous) {
	    let newNode = new NodeLinked(subject, amount, next, previous);	//create new Node

	    newNode.next = this.current.next;							//connect new Node to current.next
	    this.current.next.previous = newNode;

	    newNode.previous = this.current;							//connect newNode to current node
	    this.current.next = newNode;

	    this.current = newNode;		
	   								//set current to new Node
	}

	firstPosition() {
		this.current = this.head;
		return this.current;
	}

	nextPosition() {
		if(this.current.next !== null) {
			this.current = this.current.next;
		}
		return this.current;
	}

	lastPosition() {
		this.current = this.head;
		while(this.current.next !== null) {
			this.current = this.current.next;
		}

		return this.current;
	}

	previousPosition() {
		if(this.current.previous !== null) {
			this.current = this.current.previous;
		}
		return this.current;
	}

	deleteNode() {
		if(this.current !== this.head || this.current !== this.tail) {
			this.current.previous.next = this.current.next;
			this.current.next.previous = this.current.previous;
			this.current = this.current.previous;
		}
		return this.current;
	}

	listTotal() {
		let start = this.head;
		let amountTotal = 0;
		while(start !== null) {
			amountTotal = amountTotal + start.amount;
			start = start.next;
		}

		return amountTotal;
	}
}

export default LinkedList;