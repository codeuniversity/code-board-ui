import React from 'react';
import './HorizontalSplit.css';
import Paper from '../Paper/Paper';
import ListItem from '../ListItem/ListItem';

class HorizontalSplit extends React.Component{
    render(){
        return(
            <div className="HorizontalSplit" >
                <div className="top">
                    <div className="header">
                        <div className="split left" >
                            <h3>Can't Fucking Think</h3>
                        </div>
                        <div className="split right" >
                            <h3>Of Anything To Put</h3>
                        </div>
                    </div>
                    <div className="main">
                        <Paper className="space">
                            <h2 className="marginless more-dist-top">In All This Space</h2>
                            <h5 className="marginless more-dist-top">No really, for fuck sake</h5>
                            <h2 className="distance-top">20:45</h2>
                            <h5 className="marginless light">in 5 mins</h5>
                        </Paper>
                    </div>
                </div>
                <div className="bottom">
                    <ListItem className="bottomItem">Item Nr 1</ListItem>
                    <ListItem className="bottomItem">Item Nr 2</ListItem>
                    <ListItem className="bottomItem">Item Nr 3</ListItem>
                    <ListItem className="bottomItem">Item Nr 4</ListItem>
                    <ListItem className="bottomItem">Item Nr 5</ListItem>
                    <ListItem className="bottomItem">Item Nr 6</ListItem>
                </div>
            </div>
        )
    }
}
export default HorizontalSplit;