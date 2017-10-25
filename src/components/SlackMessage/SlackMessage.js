import React from 'react';
import './SlackMessage.css';
import Paper from '../Paper/Paper';
import VerticalCenter from '../VerticalCenter/VerticalCenter';

class SlackMessage extends React.Component{
	render(){
		let {message,className,...rest}=this.props;
		return(
			<div className="SlackMessage-container">
				<Paper className={`SlackMessage ${className || ''}`} {...rest}>
							<img src={message.user.profile.large_image_url} alt="img" className="profile-pic"/>
							<VerticalCenter>
								<span className="text">{message.text}</span>
							</VerticalCenter>
				</Paper>
			</div>

		)
	}
}
export default SlackMessage
