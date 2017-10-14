import React from "react";
import './DetailedItem.css';
import Paper from '../Paper/Paper';

class DetailedItem extends React.Component{
    render(){
        let {className,...rest} = this.props;
        return(
            <Paper className={`DetailedItem ${className || ""}`} {...rest}>
                <h4 className="marginless big-font">Bla</h4>
                <p className="marginless distance-top normal-font">blup blup</p>    
                <span className="small-font">lorem ipsum dolor amemt bla bla blup</span>        
            </Paper>
        )
    }
}
export default DetailedItem;