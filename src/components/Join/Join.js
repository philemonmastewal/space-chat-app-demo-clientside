import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="stars">
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="star star6"></div>
        <div className="star star7"></div>
        <div className="star star8"></div>

        <div className="joinInnerContainer">
          <div className="card">
            <h1 className="heading">Join</h1>
            <div>
              <input
                placeholder="Name"
                className="joinInput"
                type="text"
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="Room"
                className="joinInput mt-20"
                type="text"
                onChange={event => setRoom(event.target.value)}
              />
            </div>
            <Link
              onClick={event =>
                !name || !room ? event.preventDefault() : null
              }
              to={`/chat?name=${name}&room=${room}`}
            >
              <button className={"button mt-20"} type="submit">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
