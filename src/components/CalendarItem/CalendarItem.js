import React from 'react';
import './CalendarItem.css';
import VerticalCenter from '../VerticalCenter/VerticalCenter';
import utils from '../../utils';
class CalendarItem extends React.Component{
	isDeleted(){
		let description = this.props.event.description;
		if(description){
			return !(description.indexOf('delete') < 0);
		}else{
			return false;
		}
	}
	isUpdated(){
		let description = this.props.event.description;
		if(description){
			return !(description.indexOf('update') < 0);
		}else{
			return false;
		}
	}
	getNiceStart(){
		let event = this.props.event;
		let time = new Date(event.start.dateTime);
		return event.start.very_pretty || `${time.toLocaleDateString()}, ${time.getHours()}:${utils.getFormatedMinutes(time.getMinutes())}`;
	}
	render(){
		let {event,className,...rest} = this.props;
		return(
			<div className={`CalendarItem ${this.isDeleted() ? 'deleted' : '' } ${this.isUpdated() ? 'updated' : '' }`} {...rest}>
				<VerticalCenter className="middle">
					<h5 className="marginless">{event.summary}</h5>
					<span className="time more-dist-top">
						{this.getNiceStart()}
					</span>
					<h5 className="marginless distance-top location">{event.location}</h5>
				</VerticalCenter>
			</div>
		)
	}
}
export default CalendarItem;
