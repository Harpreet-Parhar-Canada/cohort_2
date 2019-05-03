
import React from 'react';
import LinkedList from './LinkedList';
import './NodeComp.css'
class LinkedListComp extends React.Component {
   constructor() {
       super();
       this.arrList = [];
       this.state = {
           list: new LinkedList(),
           view:'',
           inputSubject: null,
           inputAmount: 0,
           current:'',
           result:0
       }
   }
   onChange = (e) => {
        if (e.target.id === 'subject') {
            console.log('changing subject', e.target.value);
            this.setState({
                inputSubject: e.target.value
            })
        } else if (e.target.id === 'amount') {
            console.log('changing amount', Number(e.target.value));
            this.setState({
                inputAmount: Number(e.target.value)
           })
       }
   }
   onInsert = () => {
       console.log('insert');
       let list = this.state.list;
       list.insertAfter(this.state.inputSubject,this.state.inputAmount);
       console.log(list);
       this.setState({
           list: list,
           view: '',
        
       })
    }
   onInsertDisplay = () => {
        return (
           <div id='insertinfo' className='insertinfo'>
               <input onChange={this.onChange} id='subject'type='text' placeholder='Enter Subject'></input>
               <input onChange={this.onChange} id='amount' type='number' placeholder='Enter Amount'></input>
               <button onClick={this.onInsert}>Submit</button>
           </div>
        )
    }
   onStateChange = () => {
        this.setState({
            view: 'add'
        })
   }
   onDelete = () => {
       console.log('delete');
       let list = this.state.list;
       list.deleteNode();
        this.setState({
           list: list
       })
    }
    next1 = () => {
     let list = this.state.list;
     list.nextPosition();
     console.log(list);
      this.setState({
           list: list
       })

    }
    onFirst = () => {
        console.log('first'); 
        let list = this.state.list;
         list.firstPosition();
         console.log(list);
         console.log(list.current);
         this.setState({
             list: list
         })
     }

     onLast = () => {
         console.log('last');
         let list = this.state.list;
         list.lastPosition();
         console.log(list);
         console.log(list.current);
         this.setState({
             list: list
         })
     }
      onPrevious = () => {
        console.log('previous');
        let list = this.state.list;
        list.previousPosition();
        console.log(list);
        console.log(list.current);
        this.setState({
            list: list
        })
     }

     onTotal = () => {
         console.log('total');
         let list = this.state.list;
         let val = list.listTotal();
         console.log('onTotal', val);
         this.setState({
            result: val
         })
     }

    

   render() {
       return(
           <div>
               <div>
                   {this.state.view === 'add' && this.onInsertDisplay()}
               </div>
               <div className='classDiv4'>
                   <button id='btn1' onClick={this.onStateChange}>Insert</button>
                   <button id='btn2'onClick={this.onDelete}>Delete</button>
                   <br/>
                   <button id='btn3' onClick={this.onFirst}>First</button>
                   <button id='btn4' onClick={this.onLast}>Last</button>
                   <button id='btn5'onClick={this.next1}>Next</button>
                   <button id='btn6'onClick={this.onPrevious}>Previous</button>
                   <br/>
                   <button id='btn7' onClick={this.onTotal}>Total Amount</button>
                   <input value= {this.state.result}></input>
                   <p>Subject: {this.state.list.current.subject}</p>
                   <p>Amount: {this.state.list.current.amount.toLocaleString()}</p>
            
                
                         
               </div>
           </div>
       )
   }
}
export default LinkedListComp

