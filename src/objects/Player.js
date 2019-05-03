import React from 'react';


class Player extends React.Component {
	handleform(e) {
		e.preventDefault();
		this.props.player1(e.target.value)
	}
	render() {
		return(<form className='div3'onSubmit={(e)=>this.handleform(e)}>
			<label>Player x 
			<input type="radio" name="player" value="x"/>
			</label>
			<label>Player 0 
			<input type="radio" name="player" value="o"/>
			</label>
			<input type="submit" value="start"/>
			</form>
			);
	}

}
export default Player;