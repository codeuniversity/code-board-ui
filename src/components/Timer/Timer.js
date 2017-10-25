import React from 'react';
import './Timer.css';

class Timer extends React.Component{
	state={
		dateNow: new Date(),
	}
	getDifference(dateNow, date){
		let timeNow = dateNow.getTime();
		let diffTime = date.getTime();
		var seconds = Math.floor((diffTime - timeNow) / 1000);
	
		var interval = Math.floor(seconds / 31536000);
	
		if (interval >= 1) {
	
			return interval + " years";
		}
		interval = Math.floor(seconds / 2592000);
		if (interval >= 1) {
	
			return interval + " months";
		}
		interval = Math.floor(seconds / 86400);
		if (interval >= 1) {
	
			return interval + "d";
		}
		interval = Math.floor(seconds / 3600);
		if (interval >= 1) {
	
			return interval + " h";
		}
		interval = Math.floor(seconds / 60);
		if (interval >= 1) {
	
			return interval + "min";
		}
		return Math.floor(seconds) + "s";
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
		let {className,time,...rest} = this.props;
		let dateNow = this.state.dateNow;
		return(
			<div className={`Timer ${className || ''}`}>
				<span> in {this.getDifference(dateNow,time)}</span>
			</div>
		)
	}
}
export default Timer