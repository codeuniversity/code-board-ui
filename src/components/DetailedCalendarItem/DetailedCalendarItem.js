import React from 'react';
import './DetailedCalendarItem.css';
import Paper from '../Paper/Paper';
import utils from '../../utils';
import VerticalCenter from '../VerticalCenter/VerticalCenter';
import Timer from '../Timer/Timer';
class DetailedCalendarItem extends React.Component{
	getNiceStart(){
		let event = this.props.event;
		let time = new Date(event.start.dateTime);
		return event.start.very_pretty || `${time.toLocaleDateString()}, ${time.getHours()}:${utils.getFormatedMinutes(time.getMinutes())}`;
	}
	render(){
		let {event,className,...rest} = this.props;
		return(
			<Paper className={`DetailedCalendarItem ${className || ''}`} {...rest}>
				<VerticalCenter className="middle">
					<h4 className="marginless">{event.summary}</h4>
					<h6 className="marginless">{event.description}</h6>
					<h5 className="marginless more-dist-top location">{event.location}</h5>

					<Timer time={new Date(event.start.dateTime)}/>
					<p className="marginless time light">
						{/* <span >{new Date(event.start.dateTime).toLocaleString()}</span> */}
						{this.getNiceStart()}
					</p>
				</VerticalCenter>
			</Paper>
		)
	}
}
export default DetailedCalendarItem
