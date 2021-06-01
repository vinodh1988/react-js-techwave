
import './App.css';
import React from 'react';
import Box from './Components/Box'

class App extends React.Component
{
     render(){
         return(
           <div>
              <h1>React First Component is running</h1>
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
           </div>
         )
     }
}
export default App;
