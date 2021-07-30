import logo from './logo.svg';
import './App.css';

function App() {
  let list =["Hello","Hello"];
  const addNewHello = ()=>{
    list.push("Hello buddy");
    console.log(list);
  };
  return (
    <div>
      <h1>
        Working with events and list
      </h1>
      <input type="button" value="Say hello" onClick={addNewHello} />
      {list.map((item) =>{
        return <h3>{item} </h3>;
      })}
    </div>
  );
}
export default App;
