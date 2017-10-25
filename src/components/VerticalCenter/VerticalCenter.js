import React from 'react';
import './VerticalCenter.css';

class VerticalCenter extends React.Component{
	render(){
		let {children,className,...rest} = this.props;
		return(
			<div className={`VerticalCenter ${className || ''} }`} {...rest}>
				<div className="child">
					{children}
				</div>
			</div>
		)
	}
}
export default VerticalCenter
