import FAQ from "./faq";
import './App.css';
import {data} from "./data.js"

function App() {
  return (
    <div className='App'>
    < FAQ data={data}/>
    </div>
  );
}

export default App;
