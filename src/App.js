import logo from './logo.svg';
import './App.css';
import User from './User'

import {useState} from 'react'
import Student from './Student'


function App() {
  function Compinsidecomp()
  {
      return(
      <h3>This component is inside one component. We cant use it outside App component.</h3>
    )
  }
  //How event works
  function Comp2()
  {
    alert ("function called");
  }
  //State used to update data
  const [data, setData]=useState(0)
  function updateData()
  {
    setData(data+1)
  }
  return (
    <div className="App">
      <h1> App Component</h1>
      <User/>
      
      <User2/>
      <Compinsidecomp/>
      <button onClick={()=>Comp2()}> Click Me(function called)</button>
      <h1>{data}</h1>
      <button onClick={updateData}> Update data</button>
      <h1> Props in React </h1>
      <Student name="name1" email="name1@gmail.com" city="city1"/>
      <Student name="name3" email="name2@gmail.com" city="city2"/>
      <Student name="name3" email="name3@gmail.com" city="city3"/>
    </div>
  );
}

function User2()
{
    return(
        <div>
            <h2> Using function in same component</h2>
        </div>
    )
}
export default App;
