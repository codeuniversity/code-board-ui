import React from 'react';
import './Split.css';
import DetailedItem from '../DetailedItem/DetailedItem';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';

class Split extends React.Component{
    render(){
        return(
            <div className="Split">
                <div className="split left">
                    <div className="pad">
                        <DetailedItem />
                    </div>
                </div>
                <div className="split right" >
                    <List className="pad">
                        <ListItem className="selected">Item Nr 1</ListItem>
                        <ListItem>Item Nr 1</ListItem>
                        <ListItem>Item Nr 2</ListItem>
                        <ListItem>Item Nr 3</ListItem>
                        <ListItem>Item Nr 4</ListItem>
                        <ListItem>Item Nr 5</ListItem>
                    </List>
                </div>
            </div>
        )
    }
}
export default Split;