
import React from 'react'
import './styles/box.css'

class Box extends React.Component{
    render(){
        return(
        <div class="box">
            {this.props.title}
            <hr/>
        </div>
        );
    }
}

export default Box;