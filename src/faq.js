import React from "react";
import {data} from "./data";


const FAQ = () =>{
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
               <h3 className="title">{item.question}</h3>
               <p className="content">{item.answer}</p>
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

