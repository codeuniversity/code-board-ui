import React from 'react';
import './LimitedText.css';

class LimitedText extends React.Component{
	render(){
		// console.log(this.props);
		let limit = this.props.limit || 30;
		let charCount = 0;
		let text = this.props.text || '';
		let wordArr = text.split(' ');
		let newText = '';
		for (var i = 0; i < wordArr.length && newText.length < limit; i++) {
			newText += wordArr[i]+' ';
		}
		return(<span>{newText} {newText.length > limit ? '...': ''}</span>)
	}
}
export default LimitedText
