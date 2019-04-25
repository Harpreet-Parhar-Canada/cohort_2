import React from 'react';
import CityCard from './CityCard';
import Community from './Community';
import './CommunityComp.css';

class CommunityComp extends React.Component {
	constructor() {
		super();
		this.state = {
			newComm: new Community(),
			view: '',
			inputcity: null,
			inputpop: 0,
			inputlat: 0,
			inputlong: 0,
			output: null, 
		}
	}

	onChange = (e) => {
		if (e.target.id === 'city') {
			console.log('changing city name', e.target.value);
			this.setState({
				inputcity: e.target.value
			})
		} else if (e.target.id === 'pop') {
			console.log('changing population', Number(e.target.value));
			this.setState({
				inputpop: Number(e.target.value)
			})
		} else if (e.target.id === 'lat') {
			console.log('changing latitude', Number(e.target.value));
			this.setState({
				inputlat: Number(e.target.value)
			})
		} else if (e.target.id === 'long') {
			console.log('changing longitude', Number(e.target.value));
			this.setState({
				inputlong: Number(e.target.value)
			})
		}
	}

	onCityInfo = () => {
		return(
			<div id='cityinfo' className='cityinfo'>
				<input onChange={this.onChange} id='city'type='text' placeholder='Enter City Name'></input>
				<input onChange={this.onChange} id='pop' type='number' placeholder='Enter Population'></input>
				<input onChange={this.onChange} id='lat' type='number' placeholder='Enter Latitude'></input>
				<input onChange={this.onChange} id='long' type='number' placeholder='Enter Longitude'></input>
				<button onClick={this.onAddCity}>Submit</button>
			</div>
		)
	}

	onStateChange = () => {
		this.setState({
			view: 'add'
		})
	}

	onAddCity = () => {
		console.log('addCity')
		const arr = this.state.newComm;
		arr.addCity(this.state.inputcity, this.state.inputlat, this.state.inputlong, this.state.inputpop);
		console.log(arr);
		this.setState({
			newComm: arr,
			view: '',
		})
	}

	onDelete = (id) => {
		console.log('delete', id)
		const arr = this.state.newComm;
		arr.deleteCity(id);
		this.setState({
			newComm: arr,
		})	
	}

	onMoveIn = (id, people) => {
		console.log('movedIn', id)
		const arr = this.state.newComm;
		arr.commMovedIn(id, people);
		this.setState({
			newComm: arr,
		})
	}

	onMoveOut = (id, people) => {
		console.log('movedOut', id)
		const arr = this.state.newComm;
		arr.commMovedOut(id, people);
		this.setState({
			newComm: arr,
		})
	}

	onShowInfo = (id) => {
		const arr = this.state.newComm;
		let info = arr.showInfo(id);
		console.log(info);
		this.setState({
			output: info,
		})
	}

	render() {
		const comm = this.state.newComm.cityList;
		const renderList = comm.map(item => {
			return <CityCard	key={item.id}
								city={item}
								onDelete={this.onDelete}
								onMoveIn={this.onMoveIn}
								onMoveOut={this.onMoveOut}
								onShowInfo={this.onShowInfo}
					/>
		})

		return(
			<div>
				<div>
					<button id='addbtn' onClick={this.onStateChange}>Add City</button>
					{this.state.view === "add" && this.onCityInfo()}
					{renderList}
				</div>
				<div className='statusbar'>
					<p>Show City Info as String: {this.state.output}</p>
					<p>Most Northern City: {this.state.newComm.mostNorthern()}</p>
					<p>Most Southern City: {this.state.newComm.mostSouthern()}</p>
					<p>Total Population - all Cities: {this.state.newComm.getPopulation().toLocaleString()}</p>
				</div>
			</div>
		)
	}
}

export default CommunityComp