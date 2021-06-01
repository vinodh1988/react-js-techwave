
import './App.css';
import React from 'react';
import Box from './Components/Box'

class App extends React.Component
{
     constructor(){
       super();
        this.state={
          titles :["fruits","vegetables","spices","electronic goods"]
        }
     }
     render(){
         return(
           <div>
              <h1>React First Component is running</h1>
              <Box title={this.state.titles[0]}></Box>
              <Box title={this.state.titles[1]}></Box>
              <Box title={this.state.titles[2]}></Box>
              <Box title={this.state.titles[3]}></Box>
           </div>
         )
     }
}
export default App;
