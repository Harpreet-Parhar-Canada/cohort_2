import React from 'react';
import Community from './Community';

class CityCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input1: 0,
			arrCity:this.props.city
		}
	}
	handleChangeNum = (e) => {
		console.log('changing', Number(e.target.value));
		this.setState({
			input1: Number(e.target.value)
		})
	}
	  moveIn = (id, people) => {
        this.props.onMoveIn(this.props.city.id, this.state.input1);
        this.setState({
			input1: 0,
		})
    }

    moveOut = (id, people) => {
        this.props.onMoveOut(this.props.city.id, this.state.input1)
        this.setState({
			input1: 0,
		})
    }
	showInfo = () => {
		this.props.onShowInfo(this.props.city.id)
	}

	delCity = () => {
		this.props.onDelete(this.props.city.id)
	}

	render(props) {
		return(
			<div className='classDiv'>
			<div className='citycard'>
				<p id='info'>Name: {this.props.city.name}</p>
				<p id='info'>Type: {this.props.city.howBig()}  </p>
				<p id='info'>Population: {this.props.city.population}</p>
				<p id='info'>Latitude:{this.props.city.lat}</p>
				<p id='info'>Longitude: {this.props.city.long}</p>
				<p id='info'>Hempishere: {this.props.city.whichSphere()}</p>
				<input id='enterstuff1' type='text' value={this.state.input1} placeholder='Enter Numbers' onChange={this.handleChangeNum}></input>
				<br />
				<input id='enterstuff2' type='text' placeholder='Enter Text'></input>
				<br />
				<button id='btns' onClick={this.moveIn}>MovedIn</button>
				<button id='btns' onClick={this.moveOut}>MovedOut</button>
				<button id='btns'onClick={this.showInfo}>Show Info</button>
				<button id='btns' onClick={this.delCity}>Delete</button>
			</div>
				</div>

		)
	}
}

export default CityCard