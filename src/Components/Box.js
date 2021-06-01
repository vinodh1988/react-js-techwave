
import React from 'react'
import './styles/box.css'

class Box extends React.Component{
    render(){
        let temp={color:"white",fontFamily:"comic sans ms"};
        return(
        <div className="box">
            {this.props.title}
            <hr/>
            <ul>
                {this.props.items.map(x=><li style={temp}>{x}</li>)}
            </ul>
        </div>
        );
    }
}

export default Box;