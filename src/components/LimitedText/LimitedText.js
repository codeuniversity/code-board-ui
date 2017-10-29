import React from 'react';
import './LimitedText.css';
import utils from '../../utils';
class LimitedText extends React.Component{
	
	render(){
		// console.log(this.props);
		let limit = this.props.limit || 30;
		let text = this.props.text || '';		
		
		return(<span>{utils.limitedText(text, limit)}</span>)
	}
}
export default LimitedText
