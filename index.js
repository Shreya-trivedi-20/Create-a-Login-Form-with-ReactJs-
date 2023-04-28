// First of all let's create a file named LoginForm.js , inside it we will create a component called CreateForm and will use this component in our app.js file

import React, { useState } from 'react';



const styles = {
  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  width: '300px',
  height: '400px',
  margin: '20px auto 0',
  background: '#1a1a1a',
  color: '#fff',
  borderRadius: '5px',
  padding: '20px',
};

const inputStyling ={
    borderRadius: '5px',
    height: '40px',
    color: '#555',
    marginTop:'20px',
    padding: '0 10px',
    border: '1px solid #ddd',
    background: '#f6f6f6',
    boxSizing: 'border-box',
    width: '100%',
  }
  

const styling = {
  display: 'flex',
  flexDirection: 'column',
  margin: '10px 0',
};

const buttonstyling = {
  cursor: 'pointer',
  fontSize: '15px',
  background: '#01d28e',
  border: '1px solid #01d28e',
  color: '#fff',
  padding: '10px 20px',
  width: '100%',
  borderRadius: '5px',
  marginTop: '10px',
};

const stylingheading = {
  textAlign: 'center',
  padding: '20px 0',
};

const buttondivstyling ={
    display: 'flex',
    justifyContent: 'center',
}

export default function CreateForm(){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleSignIn = () => {
        // Check if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
          return;
        }
      
        alert('You are signed in');
      };
      

    return(
       <>
        <div style={styles}>
            <h1 style={stylingheading}>Sign In</h1>
            <div className='inputfields' style={styling}>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" style={inputStyling} />
            </div>
            <div className ='inputfields' style ={styling}>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" style ={inputStyling} />
            </div>
            <div style={buttondivstyling}>
                <button onClick={handleSignIn} style={buttonstyling}>Submit</button>
            </div>
        </div>
       </>
    )
}
