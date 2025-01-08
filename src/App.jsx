
/**

//Form handleing with React.

import React from "react";
const App = () => {
   
   const submitHandeler = (e) => {
    e.preventDefault()
    console.log("hello");
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandeler(e)
      }}>
        <input type="text" className="bg-slate-600 rounded px-3 py-4 m-4" placeholder="Enter your name" />
        <button className="px-3 py-4 bg-red-500 rounded">Submit</button>
      </form>
    </div>
  )
}
 */

// two way binding

import React, { useState } from 'react';
const App = () => {


  const [username, setUsername] = useState('')

  const submitHandeler = (e) => {
    e.preventDefault()
    console.log(username);
    setUsername('')
  }

    return (
      <div>
        <form onSubmit={(e) => {
          submitHandeler(e)
        }}>
          <input value={username} onChange={(e) => { setUsername(e.target.value) }} className="bg-slate-600 rounded px-3 py-4 m-4" placeholder="Enter your name" />
          <button className="px-3 py-4 bg-red-500 rounded">Submit</button>
        </form>
      </div>
    )
  }


export default App