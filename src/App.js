import React from 'react';

import Login from './components/Login';
import { useState } from 'react';
import  './index.css';
function App(){
  const [btnpopup, setBtnpopup] = useState(false);
  let [data, setdata]=useState('');
  const handleChange = (event) => {
    setdata(event.target.value);
  }
  return(
    <div className="App">
      <main>
      <h1>Welcome {data}</h1>
      <button className="loginbtn" onClick={() => setBtnpopup(true)}>Login/Register</button>
        <Login trigger={btnpopup} setTrigger = {setBtnpopup}>
          <h2>login</h2>
          <form>
            <label>
              username:
              <input type="text" value={data} onChange={handleChange} placeholder="Enter Username"/>
            </label>
          </form>
        </Login>
      </main>
    </div>
  );
}

export default App;
