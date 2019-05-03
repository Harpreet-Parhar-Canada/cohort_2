

import React from 'react';
import './fifo.css';

import LifoFifo from './LifoFifo.js';

class LifoFifoComp extends React.Component{
    constructor() {
    	super();
    	this.state={ 
    		arrList:new LifoFifo(),
    		view: '',
            input: ''
      
    	}
       
    }
        onInsert = () => {
        console.log('insert');
        let list = this.state.arrList;
        list.insertion(this.state.input);
        console.log(list);
        this.setState({
            arrList: list,
            view:''
        })
    }
     onInsertDisplay = () => {
        return (
           <div id='insertinfo' className='insertinfo'>
               <input onChange={this.onChange} id= 'enteritem' type='text' placeholder='Enter Item'></input>
               <button onClick={this.onInsert}>Submit</button>
           </div>
        )
    }
  onChange = (e) => {
        if(e.target.id === 'enteritem') {
            console.log('changing', e.target.value);
            this.setState({
                input: e.target.value
            })
        }
    }
    onStateChange = () => {
		this.setState({
			view: 'add'
		})
    }

onFifo = () => {
        console.log('delete FIFO');
        let list = this.state.arrList;
        list.delFifo();
        console.log(list);
        this.setState({
            arrList: list
        })
    }

    
     onLifo = () => {
        console.log('delete LIFO');
        let list = this.state.arrList;
        list.delLifo();
        console.log(list);
        this.setState({
            arrList: list
        })
    }



    render() {
    	 const renderList = this.state.arrList.arr.map((item,i) => {
            return <li key={i}>{item}</li>
        })
       
        return(
            <div>
            <div>
                    {this.state.view === 'add' && this.onInsertDisplay()}
                </div>
                
            <div className='displaydiv'>{renderList}</div>
            <button onClick={this.onStateChange}>Insert</button>
            <button onClick={this.onFifo}>Fifo</button>
            <button onClick={this.onLifo}>Lifo</button>
                </div>
        )
    }
}

export default LifoFifoComp