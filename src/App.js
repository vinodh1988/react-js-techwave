
import './App.css';
import React from 'react';
import Box from './Components/Box'

class App extends React.Component
{
     constructor(){
       super();
      
        this.state={
          titles :["fruits","vegetables","spices","electronic goods"],
          items:[
            ["Orange","Mango","Papaya","Gauva"],
            ["Carrot","Beetroot","Beans","Onion","Potato"],
            ["Cinnamon","Pepper","Cardamom","Tumeric"],
            ["Pendrive","Mobile","Laptop"]
          ]
        }

     }
     render(){
      console.log(this);
         return(
           <div>
              <h1>React First Component is running</h1>
              {
              this.state.titles.map(
                (x,index)=><Box title={x} items={this.state.items[index]}></Box>
              )
              }
           </div>
         )
     }
}
export default App;
      /*  <Box title={this.state.titles[0]} items={this.state.items[0]}></Box>
              <Box title={this.state.titles[1]} items={this.state.items[1]}></Box>
              <Box title={this.state.titles[2]} items={this.state.items[2]}></Box>
              <Box title={this.state.titles[3]} items={this.state.items[3]}></Box> */