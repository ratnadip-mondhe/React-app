import logo from './logo.svg';
import './App.css';

function App() {
  let title="Good Morning";
  let list=["Amravati","Akola","Malegaon","Nanded","Goa"];
  return (
  <div>
    <h1>{title}</h1>
    <ul>
    {list.map((item)=>{
      return <li>{item}</li>;
    })}
    </ul>
    </div>
  );
}

export default App;
