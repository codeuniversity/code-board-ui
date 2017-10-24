import React from 'react';
import './CalendarItem.css';

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
		console.log(description);
		if(description){
			return !(description.indexOf('update') < 0);
		}else{
			return false;
		}
	}
	render(){
		let {event,className,...rest} = this.props;
		return(
			<div className={`CalendarItem ${this.isDeleted() ? 'deleted' : '' } ${this.isUpdated() ? 'updated' : '' }`}>
				<h4 className="marginless">{event.summary}</h4>
				<div className="time">
					<span >{new Date(event.start.dateTime).toLocaleString()}</span>
				</div>
			</div>
		)
	}
}
export default CalendarItem

