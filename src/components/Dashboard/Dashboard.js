import React from 'react';
import './Dashboard.css';
import '../../styles/App.css';
import Paper from '../Paper/Paper';
import socketIOClient from "socket.io-client";
import SlackMessage from '../SlackMessage/SlackMessage';
import BarItem from '../BarItem/BarItem';
import CalendarItem from '../CalendarItem/CalendarItem';
import DelayMessage from '../DelayMessage/DelayMessage';
import DetailedCalendarItem from '../DetailedCalendarItem/DetailedCalendarItem';
import ColorBar from '../ColorBar/ColorBar';
import MainCalendarSlider from '../MainCalendarSlider/MainCalendarSlider';
let endpoint = 'https://code-board-api.herokuapp.com';
if(process.env.NODE_ENV === 'development'){
	endpoint = 'http://localhost:4001';
}
class Dashboard extends React.Component{
	state = {
		slackMessages:[],
		delays:[],
		events:[],
		emoji:{},
	}
	componentDidMount(){
		this.socket = socketIOClient(endpoint);
		this.socket.on('all_slack_messages',(messages)=>this.setState({slackMessages:messages}));
		this.socket.on('all_calendar_messages',(events)=>this.setState({events:events}));
		this.socket.on('all_delays',(delays)=>this.setState({delays:delays}));
		this.socket.on('emoji',(emoji)=>this.setState({emoji}));
		this.socket.on('slack_message',(message)=>{
			this.setState({slackMessages:this.state.slackMessages.concat([message])})
		});
		this.socket.on('calendar_message',(event)=>{
			this.setState({events:this.state.events.concat([event])})
		});
	
	}
	getAnnouncements(){
		let {slackMessages, delays, emoji} = this.state;
		const annoucementCap = 6;
		let currentAmount = 0;
		let announcements = []; 
		let sortedDelays = delays.slice().sort((a,b)=>b.delayInMinutes - a.delayInMinutes);
		for(let i = 0; i < sortedDelays.length && currentAmount<annoucementCap; i++){
			let delay = sortedDelays[i];
			announcements.push(<DelayMessage message={delay}/>);
			currentAmount += 2;
		}
		let sortedSlackMessages = slackMessages.slice().sort((a,b)=>{
			let timeStampA = new Date(a.createdAt).valueOf();
			let timeStampB = new Date(b.createdAt).valueOf();
			return timeStampB-timeStampA;
		});
		for(let i = 0; i < sortedSlackMessages.length && currentAmount<annoucementCap; i++){
			let message = sortedSlackMessages[i];
			announcements.push(<SlackMessage message={message} emoji={emoji}/>);
			currentAmount += 1;
		}

		return announcements;
		
	}
	getRelevantEvents(){
		let {events} = this.state;

		let sortedEvents = events.slice().sort((a,b)=>{
			let timeStampA = new Date(a.start.dateTime).valueOf();
			let timeStampB = new Date(b.start.dateTime).valueOf();
			return timeStampA-timeStampB;
		});
		let totalEventLength = sortedEvents.length;
		let firstEvents = [];
		let tmp_length = sortedEvents.length;
		for (let i = 0; i < 3 && i < tmp_length; i++) {
			 firstEvents.push(sortedEvents.shift());
		}

		while(sortedEvents.length > 0 && isCloserThan(sortedEvents[0], firstEvents[0])){
			firstEvents.shift();
			firstEvents.push(sortedEvents.shift());
		}

	   let firstBottomEvents = [];
	   for (let i = 0; i < 5 && i < sortedEvents.length; i++) {
			firstBottomEvents.push(sortedEvents[i]);
		}




		return {firstEvents, totalEventLength, firstBottomEvents};
	}
	
	render(){
		
		let {events, emoji} = this.state;
		
		let {firstEvents, totalEventLength, firstBottomEvents} = this.getRelevantEvents();
		let startDate, endDate;
		if(firstBottomEvents.length > 0){
			startDate = firstBottomEvents[0].start.dateTime;
			endDate = firstBottomEvents[firstBottomEvents.length-1].end.dateTime;			
		}
		return(
			<div className="Dashboard">
				<div className="main">
					<div className="flex-item flex-2">
						<MainCalendarSlider events={firstEvents}/>
					</div>
					<div className="flex-item flex-1 pad">
						<div className="annoucements">
							<div className="background"></div>
							<div className="foreground">
								{this.getAnnouncements()}							
							</div>
						</div>
					</div>
				</div>
				<div className="bottom">
					{firstBottomEvents.map((event, index)=>(
						<div className={`BarItem-container ${index===0 ? 'up-next' : ''}`}>
							<ColorBar events={firstBottomEvents} index={index} start={startDate} end={endDate} totalLength={totalEventLength-firstEvents.length}/>
							<BarItem>
								<CalendarItem event={event} />
							</BarItem>
						</div>
					))}
				</div>
			</div>
		)
	}
}
export default Dashboard


function isCloserThan(event1, event2){
	let now = new Date();
	let time1 = new Date(event1.start.dateTime);
	let time2 = new Date(event2.start.dateTime);
	let dif1 = Math.abs(time1-now);
	let dif2 = Math.abs(time2-now);
	return dif1 < dif2;
}