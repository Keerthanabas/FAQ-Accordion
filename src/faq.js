import React, { useState } from "react";
import {data} from "./data";


const FAQ = () =>{
    const[selected,setSelected] = useState(null)
    const toggle =(index)=>{
        if(selected === index){ 
            return setSelected(null)
         }
         setSelected(index)
    }

    
return (
<div >
    <h1>Project 2 : FAQ/Accordian </h1>
    <h2>Frequently Asked Questions</h2>
    <div className="box">
        <div className="accordion">
    {data.map((item,index)=>{
        return(
            <div className="item">
                <wrap>
                    <div className="title" onClick={()=>toggle(index)}>
               <h3 >{item.question}</h3>
               <span>{selected  === index ? '-' : '+'}</span>
               </div>
               <p className={selected === index ? 'content show' : 'content'}>{item.answer}</p>
               </wrap>
            </div>
            
        )
    })}
    </div>
    </div>
</div>

)
}
export default FAQ

