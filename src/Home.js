import React from "react";

import wlogo from "./images/logoInfynnowhite.png";
import glassdoor from "./images/glassdoorlogo.png";
import clutchlogo from "./images/clutchlogo.jpg";
export default function Home() {
  return (
    <div>
      <div>
        <img
          src={
            "https://infynno.com/wp-content/uploads/2021/11/infynno-bg-sm.jpg"
          }
          alt="not found"
          className="w-full  md:h-auto  mt-24 "
        />
        <div className="absolute top-40 left-4 font-bold text-2xl text-gray-700 ">
          {/* Expert Team of Laravel ,ReactJs ,Nodejs ,and AWS */}
        </div>
      </div>
      <div className="my-8 text-center text-4xl font-semibold text-gray-800">
        Services we offer
      </div>
      <div className=" md:grid md:grid-cols-3  text-center  xl:px-44 lg:px-24 md:px-12  gap-5 mb-8 mx-10 md:mx-0 space-y-5 md:space-y-0">
        <div className=" rounded-md border-2 border-sky-600 font-semibold  text-gray-800 h-10 py-1   lg:text-xl md:text-lg">
          <a href="web">Web Development</a>
        </div>
        <div className=" rounded-md border-2 border-sky-600 font-semibold text-gray-800 h-10 py-1 lg:text-xl md:text-lg">
          <a href="resources">Dedicated Resources</a>
        </div>
        <div className=" rounded-md border-2 border-sky-600 font-semibold text-gray-800 h-10 py-1 lg:text-xl md:text-lg">
          <a href="laravel">Laravel Development</a>
        </div>
        <div className=" rounded-md border-2 border-sky-600 font-semibold text-gray-800 h-10 py-1 lg:text-xl md:text-lg">
          <a href="reactjs">React Development</a>
        </div>
        <div className=" rounded-md border-2 border-sky-600 font-semibold text-gray-800 h-10 py-1 lg:text-xl md:text-lg">
          <a href="nodejs">Node Js Development</a>
        </div>
        <div className=" rounded-md border-2 border-sky-600 font-semibold text-gray-800 h-10 py-1 lg:text-xl md:text-lg">
          <a href="cloud">Cloud Services</a>
        </div>
      </div>
      {/* footer */}
      <div className="bg-gray-900 ">
        <div className="py-8 xl:px-44 lg:px-24 md:px-12 md:grid md:grid-cols-4">
          <div className="text-white px-4">
            <img
              src={wlogo}
              alt="not found"
              className="w-30 h-10 mb-2 text-white "
            />
            <div>
              We are dedicated to giving very best web development services on
              your requests.
            </div>
          </div>
          <div className="px-4 mt-5 md:mt-0">
            <div className="text-white xl:text-2xl md:text-lg text-2xl font-semibold mb-6 ">
              Development
            </div>
            <div className="space-y-4 text-white  ">
              <div>Web Apps Development</div>
              <div>PHP Laravel Development</div>
              <div>ReactJs Development</div>
              <div>NodeJs Development</div>
            </div>
          </div>
          <div className="px-4 mt-5 md:mt-0 ">
            <div className="text-white text-2xl xl:text-2xl md:text-lg font-semibold mb-6 ">
              Get In Touch
            </div>
            <div className=" text-white  ">
              1023 iSQUARE Corporate Park , Near Shukan Mall Cross Roads,
              Science City Rd Sola, Ahmedabad - 380060 Gujarat, India
            </div>
          </div>
          <div className="space-y-2 text-white px-4 mt-5 md:mt-0">
            <div className="  xl:text-2xl md:text-lg text-2xl font-semibold mb-6">
              Client Review
            </div>
            <div className="flex lg:flex-row md:flex-col ">
              <div>Rating:</div>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <div>
              <a href="https://www.glassdoor.co.in/Overview/Working-at-Infynno-Solutions-EI_IE2425240.11,28.htm">
                <img src={glassdoor} alt="not found" className="w-32 h-10" />
              </a>
            </div>
            <div className="flex lg:flex-row md:flex-col">
              <div>Rating</div>
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <div>
              <a href="https://clutch.co/profile/infynno-solutions-llp#summary">
                <img src={clutchlogo} alt="not found" className="w-20 h-10 " />
              </a>
            </div>
            <div>Copyrights © Infynno 2021.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
