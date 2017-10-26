import React from 'react';
import './MainCalendarSlider.css';
import DetailedCalendarItem from '../DetailedCalendarItem/DetailedCalendarItem';

class MainCalendarSlider extends React.Component{
	state={
		runningIndex:0,
	}
	
	getEffectiveIndex(i){
		let r = this.state.runningIndex;
		let l = this.props.events.length;
		let e = i - r;
		if(e < 0){
			return l+e;
		} 
		return e;
	}
	componentDidMount(){
		this.interval = setInterval(this.updateIndex,7000);
	}
	updateIndex=()=>{
		this.setState({runningIndex: (this.state.runningIndex+1)%(this.props.events.length)});
	}
	componentWillUnmount(){
		clearInterval(this.interval);
	}
	render(){
		let {className,events,...rest} = this.props;
		let eventsItems = events.map((event, index)=>{
			let effectiveIndex = this.getEffectiveIndex(index);
			console.log(effectiveIndex);
			return (
				<div className="slide-child pad" style={{transform:`translate(${effectiveIndex*100}%)`,zIndex:40-effectiveIndex}}>
						<DetailedCalendarItem event={event}/>
				</div>
			 )
		}); 
		return(
			<div className={`MainCalendarSlider ${className || ''}`} {...rest}>
				{eventsItems}
			</div>
		)
	}
}
export default MainCalendarSlider
