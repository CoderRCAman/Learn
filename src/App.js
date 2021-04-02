import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  const [textArr, setTextArr] = useState([]) ;
  const [text, setText] = useState('');


  
  const handlechange = (e) => {
    const value = e.target.value;
    console.log(value);
    setText(value);
  }
  
  const submit = () => {
    const arr = textArr;
    arr.push(text);
    setTextArr(arr);
    setText('');
    console.log(textArr);
  }

  return (<div>
    
    <div class="form-group">
    <label for="exampleInputPassword1">Passw</label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" value={text} onChange={e => handlechange(e)}/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
    <button type="submit" onClick = {()=>submit()} class="btn btn-primary">Submit</button>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
     
    </tr>
  </thead>
  <tbody>
    
  </tbody>
</table>
  </div>
    

  );
}

export default App;
