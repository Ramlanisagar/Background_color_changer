import React from 'react'

import './style.css';

class Background extends React.Component{
    
constructor(props){

    super(props);
    this.state = {
       selectedcolor : "red" 
     }
}

changeBackcolor = (event) => {
console.log("changed",event.target.value);

this.setState({
    selectedcolor : event.target.value
})
};

    //@override
    render = () => {

        return (

            <div style = {
                {   
                backgroundColor : this.state.selectedcolor  
                }
            }className = "back-container">
                
                <div className = "color-box">

                
                <h2> Choose a color</h2>
                <input onChange = {this.changeBackcolor} type ="color"/> 
                <p> {this.state.selectedcolor}</p>
               
                </div>

            </div>
        )
    } 
}

export default Background;