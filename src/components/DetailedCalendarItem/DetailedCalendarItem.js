import React from 'react';
import './DetailedCalendarItem.css';
import Paper from '../Paper/Paper';
import utils from '../../utils';
import VerticalCenter from '../VerticalCenter/VerticalCenter';
import Timer from '../Timer/Timer';
class DetailedCalendarItem extends React.Component{
	state={
		dateNow:new Date(),
	}
	getNiceStart(){
		let event = this.props.event;
		let time = new Date(event.start.dateTime);
		return event.start.very_pretty || `${time.toLocaleDateString()}, ${time.getHours()}:${utils.getFormatedMinutes(time.getMinutes())}`;
	}
	showTimeIndicator(){
		let now = this.state.dateNow;
		let event = this.props.event;
		let start = new Date(event.start.dateTime);
		let end = new Date(event.end.dateTime);
		let difference = end - start;
		let progress = now - start;
		if(progress < 0){
			return <Timer time={start} now={now}/>
		}else{
			let percentage = Math.round(progress / difference * 100);
			return <div className="progress-bar" style={{width:`${percentage}%`}}></div> 
		}
	}
	componentDidMount(){
		this.interval = setInterval(this.updateTime,1000);
	}
	updateTime=()=>{
		this.setState({dateNow:new Date()});
	}
	componentWillUnmount(){
		clearInterval(this.interval);
	}

	render(){
		let {event,className,...rest} = this.props;
		return(
			<Paper className={`DetailedCalendarItem ${className || ''}`} {...rest}>
				<VerticalCenter className="middle">
					<h4 className="marginless">{event.summary}</h4>
					<h6 className="marginless">{event.description}</h6>
					<h5 className="marginless more-dist-top location">{event.location}</h5>
					{this.showTimeIndicator()}
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
