import React, { Component } from 'react';


 class Cell extends React.Component
{
constructor(props) 
    {
      super()
      this.state = {
          color: props.value
      } // ...define initial state with a key of 'color' set to the 'value' prop
    }

changeColors = () => {
 this.setState({color: '#333'})
}


render() {
return (
<div className="cell" onClick={this.changeColors} style={{backgroundColor: this.state.color}}>

</div>);
    }



}

export default Cell