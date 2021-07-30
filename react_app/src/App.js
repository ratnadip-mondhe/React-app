import logo from './logo.svg';
import './App.css';

function App() {
  // data member
  let title="Event demo";
  // member function
  let myfunc=()=>{
    alert("I am click handlerd");
  };
  // bining the members inside the jsx{}

return(
  <div>
    <h1>{title} </h1>
    <input type="button" value="Clcick Me" onClick={myfunc} />
  </div>
);
}
export default App;
