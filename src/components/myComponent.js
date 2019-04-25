import React from 'react';

class MyComp extends React.Component {

	render() {
			return (
				<div>
					<h1>{this.props.whatToSay}
					{this.props.whatIsName}</h1>
					<button onClick={this.props.onButtonClickComp}>Push Me</button>	
					<h1>{this.props.boolean}
					{this.props.boolean1}</h1>
					


				</div>

			)
		}
}


export default MyComp;
