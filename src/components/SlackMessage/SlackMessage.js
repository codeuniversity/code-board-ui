import React from 'react';
import './SlackMessage.css';
import Paper from '../Paper/Paper';
import VerticalCenter from '../VerticalCenter/VerticalCenter';
import LimitedText from '../LimitedText/LimitedText';
class SlackMessage extends React.Component{
	render(){
		let {message,className,...rest}=this.props;
		console.log(message.text);
		return(
			<div className="SlackMessage-container">
				<Paper className={`SlackMessage ${className || ''}`} {...rest}>
							<img src={message.user.profile.large_image_url} alt="img" className="profile-pic"/>
							<VerticalCenter>
								<span className="text"> <LimitedText text={message.text} limit={75}/> </span>
							</VerticalCenter>
				</Paper>
			</div>

		)
	}
}
export default SlackMessage
