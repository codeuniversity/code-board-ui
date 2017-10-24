import React from 'react';
import './CalendarItem.css';

class CalendarItem extends React.Component{
	render(){
		let {event,className,...rest} = this.props;
		return(
			<div className="CalendarItem">
				<h4 className="marginless">{event.summary}</h4>
				<p className="marginless">{event.description}</p>
				<span className="time">{new Date(event.start.dateTime).toLocaleString()}</span>
			</div>
		)
	}
}
export default CalendarItem

