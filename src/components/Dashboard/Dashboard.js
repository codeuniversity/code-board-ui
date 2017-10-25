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
const endpoint = 'http://localhost:4001';

class Dashboard extends React.Component{
	state = {
		slackMessages:[],
		delays:[],
		events:[],
	}
	componentDidMount(){
		this.socket = socketIOClient(endpoint);
		this.socket.on('all_slack_messages',(messages)=>this.setState({slackMessages:messages}));
		this.socket.on('all_calendar_messages',(events)=>this.setState({events:events}));
		this.socket.on('all_delays',(delays)=>this.setState({delays:delays}));
		this.socket.on('slack_message',(message)=>{
			this.setState({slackMessages:this.state.slackMessages.concat([message])})
		});
		this.socket.on('calendar_message',(event)=>{
			this.setState({events:this.state.events.concat([event])})
		});
	
	}
	getAnnouncements(){
		let {slackMessages,delays} = this.state;
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
			announcements.push(<SlackMessage message={message}/>);
			currentAmount += 1;
		}

		return announcements;
		
	}
	render(){
		let {events} = this.state;
		console.log(events);
		let sortedEvents = events.slice().sort((a,b)=>{
			let timeStampA = new Date(a.start.dateTime).valueOf();
			let timeStampB = new Date(b.start.dateTime).valueOf();
			return timeStampA-timeStampB;
		});
		let firstEvents = [];
		let tmp_length = sortedEvents.length;
		for (let i = 0; i < 2 && i < tmp_length; i++) {
			 firstEvents.push(sortedEvents.shift());
		}
	   let firstSixEvents = [];
	   for (let i = 0; i < 6 && i < sortedEvents.length; i++) {
		firstSixEvents.push(sortedEvents[i]);
   }
		return(
			<div className="Dashboard">
				<div className="main">
					<div className="flex-item flex-2">
						<div className="main-event flex-container">
						{firstEvents.map((event)=>(
						<div className="flex-item flex-1 pad">
							<DetailedCalendarItem event={event}/>
						</div>	
						))}
						</div>
					</div>
					<div className="flex-item flex-1 pad">
						<div className="annoucements">
							{this.getAnnouncements()}							
						</div>
					</div>
				</div>
				<div className="bottom">
					{firstSixEvents.map((event)=>(
						
						<BarItem>
							<CalendarItem event={event} />
						</BarItem>
					))}
				</div>
			</div>
		)
	}
}
export default Dashboard