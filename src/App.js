import FAQ from "./faq";
import './App.css';
import {data} from "./data.js";


function App() {
  return (
    <div className="App">
      <h1 >Project 2 : FAQ/Accordian </h1>
      <h2 className="h2">Frequently Asked Questions</h2>
      
    < FAQ data={data}/>
    </div>
  )
}

export default App;
