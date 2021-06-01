
import React from 'react'
import './styles/box.css'

class Box extends React.Component{
    constructor()
    {
        super();
        this.state={dummy:""}
        console.log("child constructor")
    }

    componentDidMount(){
        console.log("child mount")
    }
 
    static getDerivedStateFromProps(props, state){
        console.log(props,state)
        return state;
    }

    
    render(){
        console.log("child render");
        let temp={color:"white",fontFamily:"comic sans ms"};
        return(
        <div className="box">
            {this.props.title}
            <hr/>
            <ul>
                {this.props.items.map(x=><li key={x} style={temp}>{x}</li>)}
            </ul>
            {this.props.children}
        </div>
        );
    }
}

export default Box;