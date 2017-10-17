import React from 'react';
import './SlackMessage.css';
import Paper from '../Paper/Paper';

class SlackMessage extends React.Component{
	render(){
		let {message,className,...rest}=this.props;
		return(
		<Paper className="SlackMessage" {...rest}>
				<span>
					<img src={message.user.profile.medium_image_url} alt="img" className="profile-pic"/>
					<span>{message.text}</span>
				</span>
		</Paper>
		)
	}
}
export default SlackMessage
