import React, { useState } from "react";
import "./App.css";
function Quote() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [myMessage, setMymessage] = useState("");
  const [fname, setFname] = useState();
  const [femail, setFemail] = useState();
  const [fmessage, setFmessage] = useState();
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (email) => {
    if (emailRegex.test(email)) {
      setMessage("");
      return true;
    } else {
      setMessage("Please enter a valid email!");
      return false;
    }
  };
  const checkField = (e) => {
    e.preventDefault();
    if (fname && femail && fmessage && validateEmail(femail)) {
      setIsValid(true);
      setMymessage(
        "Thank You Your Response has been Recorded we will contact You soon"
      );
      setFname("");
      setFemail("");
      setFmessage("");
    } else {
      setIsValid(false);
      setMymessage("This is required field");
    }
    fetch("https://gorest.co.in/public/v2/posts/100/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 7ca90328e640fcee3b0024feb6d4d8ff4b014c2c4f3956fe7325214efd0e408d",
      },
      body: JSON.stringify({ name: fname, email: femail, body: fmessage }),
    }).then(async (res) => {
      const data = await res.json();
      console.log({ data });
    });
  };

  return (
    <div className="mt-24">
      <div className="text-center  ">
        <div className="font-semibold text-4xl ">Contact US</div>
        <hr
          className="m-auto my-10 "
          style={{ border: "0.5px solid blue", width: "60px" }}
        ></hr>
      </div>
      <div className="flex flex-row xl:px-44 lg:px-24 md:px-12 px-8">
        <div className="text-center  ">
          <i className="fa-solid fa-quote-left fa-5x md:block hidden  text-violet-800 "></i>
          <i className="fa-solid fa-quote-left fa-2x md:hidden block  text-violet-800 "></i>
        </div>
        <div className="text-2xl mt-2 ml-6">
          We are offering something exclusive to our clients by using
          cutting-edge technologies. We provide top IT software development
          solutions across the globe.
        </div>
      </div>
      <form
        className="xl:px-44 lg:px-24 md:px-12 px-8 pt-10"
        onSubmit={checkField}
      >
        <label>Your Name (required)</label>
        <br />
        <input
          type="text"
          className="border-2 w-full h-10"
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
        ></input>
        <div className=" mb-7 text-red-600">
          {!isValid && !fname && myMessage}
        </div>
        <label>Your Email (required)</label>
        <br />
        <input
          type="text"
          value={femail}
          onChange={(e) => setFemail(e.target.value)}
          className="border-2 w-full h-10"
        ></input>

        <div className={`message ${isValid ? "success" : "error"} mb-7`}>
          {message} {!isValid && !femail && myMessage}
        </div>

        <label>Website url </label>
        <br />
        <input type="text" className="border-2 w-full h-10 mb-7"></input>
        <label> Your Message(required)</label>
        <br />
        <textarea
          rows="5"
          type="text"
          className="border-2 w-full "
          value={fmessage}
          onChange={(e) => {
            setFmessage(e.target.value);
          }}
        ></textarea>
        <div className="mb-7 text-red-600">
          {!isValid && !fmessage && myMessage}
        </div>
        <button
          type="submit"
          className="mb-7 rounded-full text-white hover:text-blue-800 bg-blue-800  hover:bg-white hover:border-2 border-blue-800 w-32 h-10 mt-5 text-center"
        >
          Send
        </button>
        {isValid && myMessage ? (
          <div className="text-blue-700 border-2 border-emerald-600 py-2 pl-2 mb-4">
            {isValid && myMessage}
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default Quote;
