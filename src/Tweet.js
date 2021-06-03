import React, { useState } from "react";
import "./App.css";

function Tweet(val) {

    const [count, setCount] = useState(0);

    const likes = () => {
      setCount(count + 1)
    }

    return(
        <div className="tweet">
            <h3>{val.name}</h3>
            <p>{val.message}</p>
            <h2>{count}Likes</h2>
            <button onClick={likes} className="like-btn">Like</button>
        </div>
    );
}

export default Tweet;