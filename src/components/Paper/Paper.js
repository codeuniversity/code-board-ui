import React from 'react';
import './Paper.css';

class Paper extends React.Component{
    render(){
        let {className,children,...rest} = this.props;
        return(
            <div className={`Paper ${className || ""}`} {...rest}>
                {children}
            </div>
        )
    }
}
export default Paper;