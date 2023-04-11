import React from 'react'
import './Subscribe.css'

function Subscribe() {
  return (
  <div className="subscribe">
       <p>SUBSCRIBE</p>
  <input type="email" name="email" className="subscribe-input" placeholder="Your e-mail" />
  <br />
  <div className="submit-btn">SUBMIT</div>
</div>
  )
}

export default Subscribe