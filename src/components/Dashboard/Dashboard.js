import React from 'react';
import './Dashboard.css';
import '../../styles/App.css';
import Paper from '../Paper/Paper';
import socketIOClient from "socket.io-client";
import SlackMessage from '../SlackMessage/SlackMessage';
import BarItem from '../BarItem/BarItem';
import CalendarItem from '../CalendarItem/CalendarItem';
const endpoint = 'http://localhost:4001';

class Dashboard extends React.Component{
	state = {
		slackMessages:[],
		events:[],
	}
	componentDidMount(){
		this.socket = socketIOClient(endpoint);
		this.socket.on('all_slack_messages',(messages)=>this.setState({slackMessages:messages}));
		this.socket.on('all_calendar_messages',(events)=>this.setState({events:events}));
		this.socket.on('slack_message',(message)=>{
			this.setState({slackMessages:this.state.slackMessages.concat([message])})
		});
		this.socket.on('calendar_message',(event)=>{
			this.setState({events:this.state.events.concat([event])})
		});
	
	}
	render(){
		let {slackMessages,events} = this.state;
		console.log(slackMessages);
		let sortedSlackMessages = slackMessages.slice().sort((a,b)=>{
			let timeStampA = new Date(a.createdAt).valueOf();
			let timeStampB = new Date(b.createdAt).valueOf();
			return timeStampB - timeStampA;
		});
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
		let firstSlackMessages = [];
		for (let i = 0; i < 6 && i < sortedSlackMessages.length; i++) {
			firstSlackMessages.push(sortedSlackMessages[i]);
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
							<Paper className="main-event">
								<h4>{event.summary}</h4>
								<p>{event.description}</p>
							</Paper>
						</div>	
						))}
						</div>
					</div>
					<div className="flex-item flex-1 pad">
						<div className="slack-messages">
							{firstSlackMessages.map((message)=><SlackMessage message={message}/>)}
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
