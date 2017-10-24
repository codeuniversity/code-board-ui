import React from 'react';
import './BarItem.css';
import Paper from '../Paper/Paper';

class BarItem extends React.Component{
	render(){
		return(
			<div className="BarItem">
				<Paper>
					{this.props.children}
				</Paper>
			</div>
		)
	}
}
export default BarItem
