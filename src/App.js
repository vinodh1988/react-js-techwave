
import './App.css';
import React,{createRef} from 'react';
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
         
        this.addItem = this.addItem.bind(this);
        this.item=createRef();
        this.type=createRef(); //uncontrolled forms
     }

     addItem(){
       let temp= this.item.current.value;
       let type=Number(this.type.current.value);
       console.log(temp,type)
       this.state.items[type].push(temp);
       console.log(this.state.items);
       this.setState(this.state);
     }
     render(){
  
         return(
           <div>
              <h1>React First Component is running</h1>
              <div>
                <input type="text" ref={this.item} />
                <select ref={this.type}>
                  <option value="0">fruits</option>
                  <option value="1">vegetables</option>
                  <option value="2">spices</option>
                  <option value="3">electronic goods</option>
                </select>
                <button onClick={this.addItem}>add Item</button>
              </div>
              {
              this.state.titles.map(
                (x,index)=><Box key={x} title={x} items={this.state.items[index]}></Box>
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