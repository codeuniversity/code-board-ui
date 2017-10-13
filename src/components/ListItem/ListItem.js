import React from 'react';
import './ListItem.css';

class ListItem extends React.Component{
    render(){
        return(
            <div className="ListItem">
                {this.props.children}
            </div>
        )
    }
}
export default ListItem;