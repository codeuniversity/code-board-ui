import React from 'react';
import './DiffHoriSplit.css';
import Paper from '../Paper/Paper';
import ListItem from '../ListItem/ListItem';
class DiffHoriSplit extends React.Component{
    render(){
        return(
            <div className="DiffHoriSplit">
                 <div className="main">
                    <div className="third left">
                        <div className="vertical-center" >
                            <Paper style={{padding:"40px 10px"}} >
                                <h4>Some Text, that is here</h4>
                                <span className="small-font">Imagine some creative text</span>
                            </Paper>
                        </div>
                        
                    </div>
                    <div className="third left">
                        <div className="vertical-center" >
                            <Paper style={{padding:"40px 10px"}} >
                                <h4>Some Text, that is here</h4>
                                <span className="small-font">Imagine some creative text</span>
                            </Paper>
                        </div>
                        
                    </div>
                    <div className="third left">
                        <div className="vertical-center" >
                            <Paper style={{padding:"40px 10px"}} >
                                <h4>Some Text, that is here</h4>
                                <span className="small-font">Imagine some creative text</span>
                            </Paper>
                        </div>
    
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
export default DiffHoriSplit;