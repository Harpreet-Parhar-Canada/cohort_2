class Node {
	constructor(subject, amount, next,previous) {
		this.subject = subject,
		this.amount = amount,
		this.next = next,
		this.previous=previous
	}

	show() {
		return `${this.subject} ${this.amount}`
	}
}

export default Node