import logo from './logo.svg';
import './App.css';
import {useState} from "react";
export default function App(){
  // declaring the variable using react::hooks
  // array destructuring::react hooks
  const [list,setList]=useState([]);
  // arrowe function
  const addNewhello =() =>{
    // array clone in
    const newList=[...list,"Hello World"];
    setList(newList);
    console.log(list);
  };
  // view
  // react unware of the changes of local variable
  return(
    <div>
      <h1>Working with Event and list</h1>
      <input type="button" value="Say hello" onClick={addNewhello} />
      {list.map((item) =>{
        return (
          <h3>
            {item} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi commodi molestias totam similique quam ea excepturi animi. At, quod sequi, dolores culpa optio voluptatem eveniet architecto quae ut enim vero!

          </h3>
        );
      })}
    </div>
  );
}


//export default App;
