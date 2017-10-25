import React from 'react';
import './DelayMessage.css';
import Paper from '../Paper/Paper';

class DelayMessage extends React.Component{
	getNiceDeparture(){
		let time = new Date(this.props.message.departureTime)
		return `${time.getHours()}:${time.getMinutes()}`;
	}
	render(){
		let {message,className,...rest} = this.props;
		return(
			<div className="DelayMessage-container">
				<Paper className={`DelayMessage ${className || ''}`} {...rest}>
					{/* <span>{message.product} {message.lineName} -> {message.direction} late by {message.delayInMinutes} mins</span> */}
					<h4 className="name marginless">{message.product} {message.lineName}</h4>
					<h6 className="direction marginless">{message.direction}</h6>
					<h3 className="departure marginless distance-top">
						{this.getNiceDeparture()} <span className="delay">+{message.delayInMinutes}</span>
					</h3>
				</Paper>
			</div>
		)
	}
}
export default DelayMessage
