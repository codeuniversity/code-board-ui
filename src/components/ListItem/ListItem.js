import React from 'react';
import './ListItem.css';

class ListItem extends React.Component{
    render(){
        let {className,children,...rest} = this.props;
        return(
            <div className={`ListItem ${className || ""}`} {...rest}>
                {children}
            </div>
        )
    }
}
export default ListItem;