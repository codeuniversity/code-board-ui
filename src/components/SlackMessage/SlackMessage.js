import React from 'react';
import './SlackMessage.css';
import Paper from '../Paper/Paper';
import VerticalCenter from '../VerticalCenter/VerticalCenter';
import LimitedText from '../LimitedText/LimitedText';

class SlackMessageText extends React.Component{
	hasEmoji(text, emoji){
		let index = text.indexOf(`:${emoji.text}:`);
		return index;
	}
	replaceText(text, emoji){
		if(!text){
			return '';
		}
		for (var i = 0; i < emoji.length; i++) {
			var emoj = emoji[i];
			let index = this.hasEmoji(text, emoj);
			if(index !== null && index > -1){
				let length = emoj.text.length;
				let firstTextPart = text.slice(0,index);
				let afterTextPart = text.slice(index+length+2,text.length);

				let image = <img src={emoj.imageSrc} alt="" className="emoji-img"/>
				return <span>{this.replaceText(firstTextPart, emoji)} {image} {this.replaceText(afterTextPart, emoji)} </span>
			}
		}
		return <span>{text}</span>
	}
	emojiArr(emoji){
		let arr = [];
		let keys = Object.keys(emoji);		
		keys.forEach(key=>{
			let imageSrc = emoji[key];
			arr.push({text:key,imageSrc:imageSrc})
		});
		return arr;
	}
	render(){
		let {text, emoji} = this.props;
		return(
			<span>{this.replaceText(text, this.emojiArr(emoji))}</span>
		)
	}
}

class SlackMessage extends React.Component{
	render(){
		let {message,className,emoji,...rest}=this.props;
		return(
			<div className="SlackMessage-container">
				<Paper className={`SlackMessage ${className || ''}`} {...rest}>
							<img src={message.user.profile.large_image_url} alt="img" className="profile-pic"/>
							<VerticalCenter>
								<span className="text"> <SlackMessageText text={message.text} emoji={emoji}/> </span>
							</VerticalCenter>
				</Paper>
			</div>

		)
	}
}
export default SlackMessage
