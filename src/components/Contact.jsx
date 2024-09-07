import React from "react";
import "./../styles/contact.css"
export default function Contact() {
  return (
    <div id="wrapper" className="bg-black mt-5">
      <div className="login-box">
        <h3 className="text-white my-2">Contact me</h3>
      <form action="https://formspree.io/f/xwpepovg" method="POST">
        <div className="user-box">
          <input type="email" name="email" required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="text" name="message" required />
          <label>Enter your message</label>
        </div>
        <div className="user-box">
          <input type="text" name="service" required />
          <label>Enter your service</label>
        </div>
        <center>
          <button type="submit">
            SEND
            <span></span>
          </button>
        </center>
      </form>
    </div>
    </div>
  );
}
