import React from 'react';
import './List.css';
class List extends React.Component{
    render(){
        let {className,children,...rest} = this.props;
        return(
            <div className={`List ${className || ""}`} {...rest}>
                {children}
            </div>
        )
    }
}
export default List;