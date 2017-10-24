import React from 'react';
import './SlackMessage.css';
import Paper from '../Paper/Paper';

class SlackMessage extends React.Component{
	render(){
		let {message,className,...rest}=this.props;
		return(
			<div className="SlackMessage-container">
				<Paper className={`SlackMessage ${className || ''}`} {...rest}>
						<span>
							<img src={message.user.profile.medium_image_url} alt="img" className="profile-pic"/>
							<span>{message.text}</span>
						</span>
				</Paper>
			</div>

		)
	}
}
export default SlackMessage
