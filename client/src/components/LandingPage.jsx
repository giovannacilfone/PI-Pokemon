import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"



export default function LandingPage() {
  return (
    <div className="lp">
        <img src="/pika.jpg" alt="" />
      <div>
        </div>
        <Link to="/home">
          <button className="button"> ¡Start!</button>
        </Link>
</div>
 
  )
}

