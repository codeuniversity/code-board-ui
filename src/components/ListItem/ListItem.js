import React from 'react';
import './ListItem.css';
import Paper from '../Paper/Paper';

class ListItem extends React.Component{
    render(){
        let {className,children,...rest} = this.props;
        return(
            <div className={`ListItem ${className || ""}`} {...rest}>
                <Paper>
                    {children}
                </Paper>
            </div>
        )
    }
}
export default ListItem;