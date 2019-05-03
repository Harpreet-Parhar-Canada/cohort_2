import React from 'react';
import Rose from './rose.png';
import './dom2.css';
class Picture extends React.Component {

  

	render(){
		
		return (<div className="divClass3">
			 <img src={Rose} id="image1" alt="first" />
			</div>);
    


}
}



export default Picture;
