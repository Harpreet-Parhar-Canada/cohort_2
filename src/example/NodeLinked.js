class NodeLinked {
	constructor(subject, amount, next=null,previous=null) {
		this.subject = subject;
		this.amount = amount;
		this.next = next;
		this.previous=previous;
	}

	show() {
		return `${this.subject} ${this.amount}`
	}
}

export default NodeLinked;