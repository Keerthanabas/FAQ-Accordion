import React, { useState } from "react";
import {data} from "./data";
import "./faq.css";


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

