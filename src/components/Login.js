import React from 'react'
import './Login.css'
function Login(props) {
  return (props.trigger) ? (

    <div className="popup">
        <div className="popup-inner">
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Login