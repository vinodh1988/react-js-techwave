import React from 'react';

//Variation 1
export const Func =(props)=>{
    return(
   <div className="fun">
       <h1>This is a functional component</h1>
       {props.name}
   </div>
    );
}

//variation2
export const Func2 =({name})=>{
    return(
    <div className="fun">
        <h1>This is a functional component</h1>
        {name}
    </div>
    );
 }



