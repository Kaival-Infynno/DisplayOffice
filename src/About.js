import React from "react";
import insideabout from "./images/Insideabout.gif";
function About() {
  return (
    <div className="mt-24 xl:px-44 lg:px-24 md:px-12 px-8  ">
      <div className="lg:grid lg:grid-cols-2 flex flex-col items-center">
        <div className="">
          <img src={insideabout} alt="not found" />
        </div>
        <div>
          <div className="text-4xl font-semibold mt-4 ">Infynno Solutions</div>
          <div className="py-7">Infinite Innovation</div>
          <hr
            className=""
            style={{ border: "0.5px solid blue", width: "60px" }}
          ></hr>
          <div className="text-base pt-7 ">
            Infynno is primarily a startup-focused website and mobile
            application development firm dedicated to providing the best web
            development services on demand. We assist you in transforming your
            business by developing digital products with fresh concepts and
            eye-catching designs. We use the most up-to-date and well-proven
            methodologies and tools to produce an aesthetically beautiful and
            completely functional website or mobile application.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
