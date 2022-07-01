import ReactDOM from 'react-dom/client';
import React from 'react';

function App() {

  const root = ReactDOM.createRoot(document.getElementById("root"));
  class Login extends React.Component{
    render(){
      //popup
      return(
        <div>
          <div className="login-popup">
            <div className="login-popup-content">
              <div className="login-popup-header">
                <h1>Login</h1>
              </div>
              <div className="login-popup-body">
                <div className="login-popup-body-input">

                  <input type="text" placeholder="Username" />

                  <button>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  class Navbar extends React.Component{
  render(){
    return(
      <div>
        <h1>Navbar</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={()=>{root.render(<Login/>)}}>Login</li>
        </ul>
      </div>
    );
  }
}

root.render(<Navbar />);
}


export default App;
