import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Join.css';

const Join = () => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuterContainer">
            <header><a href="#">&#128293; OneChat</a></header>
            <div className="joinInnerContainer">
                <h3 className="heading">Welcome to OneChat</h3>
                <div>
                    <input
                        placeholder="Name"
                        className="joinInput"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder="Room"
                        className="joinInput mt-20"
                        type="text"
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </div>
                <Link to={`/chat?name=${name}&room=${room}`}
                    onClick={event => (!name || !room) ? event.preventDefault() : null}>
                    <button className="button mt-20" type="Submit">Sign In!</button>
                </Link>
            </div>
            <footer><span>Build with &#128150; By &nbsp;</span><a target="_blank" href="https://harshdigwani.github.io">&lt;Harsh /&gt; </a></footer>
        </div>
    )
}

export default Join;