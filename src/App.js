import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {

  const [users] = useState([
    {
      name: "Narendra Modi",
      message: "India is going through a great crisis"
    },
    {
      name: "Shashi Tharoor",
      message: "We need more heaith facilities"
    },
    {
      name: "Pinarayi Vijayan",
      message: "We are able to deliver kits"
    },
    {
      name: "Rahul Gandhi",
      message: "Crocodile tears!!"
    },
  ])
 

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;