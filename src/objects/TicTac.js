import React, { Component } from 'react';
//import logo from './images/embed2.jpg';

import Player from'./Player.js';
import '../example/dom1.css';

class TicTac extends Component {
  
  constructor(props) {
   super(props);
   this.state= {
   	board: Array(9).fill(null),
   	winner:null,
     player:"X" 
	}
    }
    checkWinner(str) {
	let win=[
	['0','1','2'],
	['3','4','5'],
	['6','7','8'],
	['0','3','6'],
	['1','4','7'],
	['2','5','8'],
	['2','4','6'],
	['0','4','8']
	]
	for (let index = 0; index < win.length; index++) {
		const [a,b,c]=win[index];
		if(this.state.board[a]&&this.state.board[a]===this.state.board[b]&&this.state.board[a]===this.state.board[c])
			{alert("You Won");
			this.setState({
        winner:'won'
      })
	}
		
	}
}

  
  handleClick(index) {
  	let newBoard=this.state.board;
  
  
	if(this.state.board[index]===null && !this.state.winner)
  	   {
  	   	newBoard[index]=this.state.player;
  	     this.setState({
			board: newBoard,
			player:this.state.player==="X"?"0":"X"
		})
	}
  this.checkWinner()
	
	}

setPlayer(player1) {
  this.setState({
        player:player1
      })
}
  

  render() {
    const box1=this.state.board.map((box,index) =><div className='box' key={index} onClick={() =>this.handleClick(index)}>{box}</div>)
      return (
      <div>
      
      	<div className='div1'>
        <Player player1={(e)=> this.setPlayer(e)} />
      	    <div className='board'>
              {box1}
            </div>
       	</div>

                     
      </div>);

  }
      }    


export default TicTac;


  


