import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./images/logoInfynno.png";
function MainHeader() {
  const [state, setState] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  const closeBtn = () => {
    setState(false);
  };

  return (
    <div className=" flex flex-row justify-between xl:px-44 lg:px-24 md:px-12 px-8 fixed left-0 right-0 top-0 z-10 bg-white w-full h-24">
      <div>
        <a href="/">
          <img src={logo} alt="not found" className=" mt-5 w-30 h-10 " />
        </a>
      </div>

      <div className="sm:flex flex-row space-x-7  font-semibold hidden  ">
        <div className="pt-7">
          <Link to="/" className="hover:text-blue-800 focus:text-blue-800">
            Home
          </Link>
        </div>
        {/* Droup Down */}
        <div className="pt-7">
          <Link
            to="/#"
            className="hover:text-blue-800 focus:text-blue-800 "
            onClick={console.log("hittted")}
          >
            <div className="dropdown ">
              <button className=" font-semibold">
                <span>Company</span>
              </button>
              <div className="dropdown-menu absolute hidden text-gray-700 pt-11">
                <div className="">
                  <Link
                    to="/about"
                    className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block "
                  >
                    Abous Us
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/"
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block "
                  >
                    Our Team
                  </Link>
                </div>
                <div>
                  <Link
                    to="/career"
                    className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block"
                  >
                    Career
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* <button
          type="button"
          onClick={() => setCompanyDropdown(!companyDropdown)}
        >
          <div className="flex flex-row justify-between  ">
            <div>Company</div>
            <div>
              <i className="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        </button>

        <div
          id="dropdown"
          className={`${
            !companyDropdown ? "hidden" : ""
          } z-10 w-44 text-base list-none bg-white divide-y `}
        >
          <div className="py-1">
            <div>
              <Link
                to="/about"
                className="block py-2 px-4 text-sm text-gray-700  "
                onClick={closeBtn}
              >
                About us
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="block py-2 px-4 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                our Team
              </Link>
            </div>
            <div>
              <Link
                to="/career"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={closeBtn}
              >
                Career
              </Link>
            </div>
          </div>
        </div> */}
        <div className="rounded-full text-white hover:text-blue-800 bg-blue-800  hover:bg-white hover:border-2 border-blue-800 w-32 h-10 mt-5 pt-1.5   text-center  ">
          <Link to="/get-a-quote">
            <button className="  font-semibold ">Get A Quote</button>
          </Link>
        </div>
      </div>
      {/* Making A button For Mobile View */}
      <div className="block sm:hidden h-full">
        <button onClick={() => setState(!state)}>
          {state === false ? (
            <i className="fa fa-bars fa-align-justify  fa-2x mt-4 "></i>
          ) : (
            <Link to="/">
              <i className="fa-solid fa-xmark fa-2x mt-4 mr-8 top-0 right-0 fixed"></i>
            </Link>
          )}
        </button>

        {state ? (
          <>
            <div className="absolute mt-24 w-full top-0 left-0  bg-white h-screen">
              <div className="flex  flex-col space-y-2  px-4">
                <div>
                  <Link to="/" onClick={closeBtn}>
                    Home
                  </Link>
                </div>

                {/* Droup Down */}
                <button
                  type="button"
                  onClick={() => setCompanyDropdown(!companyDropdown)}
                >
                  <div className="flex flex-row justify-between  ">
                    <div>Company</div>
                    <div>
                      <i className="fa-solid fa-arrow-down"></i>
                    </div>
                  </div>
                </button>

                <div
                  id="dropdown"
                  className={`${
                    !companyDropdown ? "hidden" : ""
                  } z-10 w-44 text-base list-none bg-white divide-y `}
                >
                  <div className="py-1">
                    <div>
                      <Link
                        to="/about"
                        className="block py-2 px-4 text-sm text-gray-700  "
                        onClick={closeBtn}
                      >
                        About us
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/"
                        className="block py-2 px-4 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        our Team
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/career"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={closeBtn}
                      >
                        Career
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to="/get-a-quote" onClick={closeBtn}>
                    <button>Get A Quote</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MainHeader;
