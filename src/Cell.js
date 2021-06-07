import React, { Component } from 'react'

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color : this.props.value
         }
    }
    
    
    render() { 
        return ( <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickDiv}></div> );
    }
    clickDiv = () => {
        console.log('clicked the div')
        this.setState({
            color : '#333'
        })

    }
}
 
export default Cell;
// check youtube for onClick vids
// need to get something loading on screen

