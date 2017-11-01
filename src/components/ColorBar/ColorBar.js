import React from 'react';
import './ColorBar.css';
import utils from '../../utils';
const beginningColor = '#7bc4dc';
const endColor = '#7edd7e';

class ColorBar extends React.Component{
	getProgressOf(time){
		let {start, end} = this.props;
		let beginningDate = new Date(start);
		let endDate = new Date(end)
		let difference = endDate - beginningDate;
		let point = time - beginningDate;
		return point/difference;
	}
	getMiddleProgressOf(time1,time2){
		let middle = (time1.valueOf()+time2.valueOf())/2
		let middleProgress = this.getProgressOf(new Date(middle));
		return middleProgress;
	}
	getProps(){
		let {events, index} = this.props;
		let event = events[index];
		let eventBefore = events[ index-1 >= 0 ? index-1 : 0];
		let eventAfter = events[index+1 < events.length ? index+1 : events.length-1];
		return {event,eventBefore,eventAfter};
	}
	getStartColor(){
		let {event,eventBefore} = this.getProps();
		let time1 = new Date(eventBefore.end.dateTime);
		let time2 = new Date(event.start.dateTime);
		return getColorOf(this.getMiddleProgressOf(time1,time2));
	}
	getMiddleColor(){
		let {event} = this.getProps();
		let time1 = new Date(event.start.dateTime);
		let time2 = new Date(event.end.dateTime);
		// console.log(getColorOf(this.getMiddleProgressOf(time1,time2)))
		return getColorOf(this.getMiddleProgressOf(time1,time2));

	}
	getEndColor(){
		let {event,eventAfter} = this.getProps();
		let time1 = new Date(event.end.dateTime);
		let time2 = new Date(eventAfter.start.dateTime);
		return getColorOf(this.getMiddleProgressOf(time1,time2));

	}
	render(){
		let {event,index,totalLength,events} = this.props;
		let left,right;
		// console.log(index);
		if(index !== 0){
			left = (<div className="left" style={{backgroundImage:getGradient(this.getStartColor(),this.getMiddleColor())}}></div>)
		}
		if(index !== events.length-1 || events.length !== totalLength){
			right = (<div className="right" style={{backgroundImage:getGradient(this.getMiddleColor(),this.getEndColor())}}></div>)
		}
		return(
			<div className="ColorBar">
				{left}
				<div className="circle" style={{background:this.getMiddleColor()}}></div>
				{right}
			</div>
		)
	}
}
export default ColorBar

function getColorOf(progress){
	// console.log(progress)
	return utils.lerpColor(beginningColor,endColor,progress);
}
function getGradient(color1,color2){
	let str = `linear-gradient( to right,${color1} 0%,${color2} 100%)`;
	// console.log(str);
	return str;
}
