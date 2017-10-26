import React from 'react';
import './DelayMessage.css';
import Paper from '../Paper/Paper';
import VerticalCenter from '../VerticalCenter/VerticalCenter';
import utils from '../../utils';
class DelayMessage extends React.Component{
	getNiceDeparture(){
		let time = new Date(this.props.message.departureTime)
		return `${time.getHours()}:${utils.getFormatedMinutes(time.getMinutes())}`;
	}
	getName(){
		let message = this.props.message;
		let name = message.lineName;
		let product = message.product;
		return product === 'bus' ? `bus ${name}` : name;
	}
	render(){
		let {message,className,...rest} = this.props;
		return(
			<div className="DelayMessage-container">
				<Paper className={`DelayMessage ${className || ''}`} {...rest}>
					<VerticalCenter className="middle">
						<h4 className="name marginless">{this.getName()} <span className="direction">{message.direction}</span></h4>
						<h6 className="direction marginless"></h6>
						<h6 className="station marginless">{message.stationName}</h6>
						<h3 className="departure marginless">
							{this.getNiceDeparture()} <span className="delay">+{message.delayInMinutes}</span>
						</h3>
					</VerticalCenter>
				</Paper>
			</div>
		)
	}
}
export default DelayMessage
