import React, { useState, useRef } from "react";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import careerpage from "./images/careerpage.gif";
function ReactDeveloper() {
  return (
    <>
      <div className="flex xl:flex-row flex-col">
        <div className=" px-5 xl:w-2/3  w-full">
          <div>
            <div className="font-semibold text-2xl mb-5 mt-5 md:mt-0">
              ReactJs Developer
            </div>
            <div className="text-gray-600 ">
              We are looking for a great JavaScript developer who is proficient
              with React.js. Your primary focus will be on developing user
              interface components and integrating APIs using NextJS,
              Typescript, and Tailwind CSS.
            </div>
            <div className="flex flex-row my-5">
              <div className="font-semibold text-gray-800 ">Experience:</div>
              <div className="text-gray-600"> 1+</div>
            </div>
            <div className="flex flex-row mb-5">
              <div className="font-semibold text-gray-800 ">Openings:</div>
              <div className="text-gray-600"> 2</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-2xl xl:mt-36 mt-8 mb-8">
              Responsibilities
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Developing new user-facing features using React.js
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Building reusable components and front-end libraries for future
              use
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Translating Figma designs and wireframes into high quality code
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">Integrating Rest APIs</div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Optimizing components for maximum performance across a vast array
              of web-capable devices and browsers
            </div>
          </div>
        </div>
        {/* Image Portion */}
        <div className="flex flex-col px-5">
          <div>
            <img src={careerpage} alt="not found" />
          </div>
          <div className="font-semibold text-2xl  mb-8 pt-6">
            Skill required
          </div>
          <div className="flex flex-row">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Strong proficiency in JavaScript, including DOM manipulation and
              the designing
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Thorough understanding of React.js (React Hooks) and its core
              principles
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Experience with Serverside rendering with NextJS
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Experience with basics of Typescript and Tailwind CSS
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Knowledge of modern authorization mechanisms, such as JSON Web
              Toke
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Ability to understand business requirements and translate them
              into technical requirements
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div>
              <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
            </div>
            <div className="pl-4 text-gray-600">
              Familiarity with code versioning tools such as Git
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ReactNodeDeveloper(props) {
  return (
    <div className="flex xl:flex-row flex-col">
      <div className=" px-5 xl:w-2/3 w-full">
        <div>
          <div className="font-semibold text-2xl mb-5 mt-5 md:mt-0">
            ReactJs + NodeJs Developer
          </div>
          <div className="text-gray-600 ">
            We are looking for a great JavaScript developer who is proficient
            with ReactJs + NodeJs. Your primary focus will be on developing user
            interface components and integrating APIs using NodeJs, and Redux,
            NextJS, Typescript, and Tailwind CSS.
          </div>
          <div className="flex flex-row my-5">
            <div className="font-semibold text-gray-800 ">Experience:</div>
            <div className="text-gray-600"> 1+</div>
          </div>
          <div className="flex flex-row mb-5">
            <div className="font-semibold text-gray-800 ">Openings:</div>
            <div className="text-gray-600"> 2</div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-2xl xl:mt-36 mt-8 mb-8">
            Responsibilities
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            You have to perform full stack development activities using MERN
            Stack
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Ability to translate UX Designs into functional web apps using React
            JS
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Writing effective business logic (using Rest API or GraphQL API)
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Database design for scalable and secure system using NoSQL (MongoDB)
            or RDBMS (MySQL)
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Algorithm design for system modules
          </div>
        </div>
      </div>
      {/* Image Portion */}
      <div className="flex flex-col px-5">
        <div>
          <img src={careerpage} alt="not found" />
        </div>
        <div className="font-semibold text-2xl  mb-8 pt-6">Skill required</div>
        <div className="flex flex-row">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Strong Knowledge of algorithms and database design
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Hands on experience in MERN stack (MySQL would be plus)
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Hands on experience to develop RestGraphQL API using Node.js with
            Typescript
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Nice to have experience on AWS services (EC2, SQS, SES, Lambda)
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Experience and Exposure working with different projects and business
            models will be an advantage
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i className="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Experience in other JS frameworks like Next.JS would be pluss
          </div>
        </div>
      </div>
    </div>
  );
}

function LaravelViewDeveloper() {
  return (
    <div className="flex xl:flex-row flex-col">
      <div className=" px-5 xl:w-2/3 w-full">
        <div>
          <div className="font-semibold text-2xl mb-5 mt-5 md:mt-0">
            Laravel + Vue Developer
          </div>
          <div className="text-gray-600 ">
            We are looking for a great PHP Laravel developer who is proficient
            with VueJs. Your primary focus will be on developing a website using
            PHP Laravel + VueJs. Additional exp in HTML, BootStrap, CSS3 and
            various Databases like MySql, MongoDB and etc.
          </div>
          <div className="flex flex-row my-5">
            <div className="font-semibold text-gray-800 ">Experience:</div>
            <div className="text-gray-600"> 1+</div>
          </div>
          <div className="flex flex-row mb-5">
            <div className="font-semibold text-gray-800 ">Openings:</div>
            <div className="text-gray-600">4 </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-2xl xl:mt-36 mt-8 mb-8">
            Responsibilities
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Understanding of MVC design patterns
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Knowledge of object-oriented PHP programming
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Strong knowledge of database systems
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Understanding fundamental design principles behind a scalable
            application
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Proficient with Vue.js framework and its core principles such as
            components, reactivity, and the virtual DOM
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Experience in writing unit and integration tests, continuous
            integration and test-driven development
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Ability to write efficient, secure, well-documented, and clean
            JavaScript code
          </div>
        </div>
      </div>
      {/* Image Portion */}
      <div className="flex flex-col px-5">
        <div>
          <img src={careerpage} alt="not found" />
        </div>
        <div className="font-semibold text-2xl  mb-8 pt-6">Skill required</div>
        <div className="flex flex-row">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Solid experience in PHP Laravel web framework
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Experience with writing SQL queries
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Good Experience with Laravel Eloquent ORM
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Good Experience with Laravel Events / Storage / Blade Template
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Good experience with Laravel API development and Third party API
            integration
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Familiarity with the Vue.js ecosystem, including Vue CLI, Vuex, Vue
            Router, and Nuxt.js
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Good understanding of HTML5 and CSS3, including Sass or Less
          </div>
        </div>
      </div>
    </div>
  );
}
function ReactNativeDeveloper() {
  return (
    <div className="flex xl:flex-row flex-col">
      <div className=" px-5 xl:w-2/3 w-full">
        <div>
          <div className="font-semibold text-2xl mb-5 mt-5 md:mt-0">
            React Native Developer
          </div>
          <div className="text-gray-600 ">
            We are looking for a React Native developer who can develop a mobile
            application for startup clients. Developer must have experience in
            ios and android development platforms with Redux, Javascript, Type
            Script, JSX, and ES6.
          </div>
          <div className="flex flex-row my-5">
            <div className="font-semibold text-gray-800 ">Experience:</div>
            <div className="text-gray-600"> 1+</div>
          </div>
          <div className="flex flex-row mb-5">
            <div className="font-semibold text-gray-800 ">Openings:</div>
            <div className="text-gray-600">2 </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-2xl xl:mt-36 mt-8 mb-8">
            Responsibilities
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Architect, build and maintain excellent React Native applications
            with clean code
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Implement pixel perfect UI's that match designs
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Implement clean, modern, smooth animations and transitions that
            provide an excellent user experience
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">Integrate third-party API's</div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Release applications to iOS and Google Play stores
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Work with native modules when required
          </div>
        </div>
      </div>
      {/* Image Portion */}
      <div className="flex flex-col px-5">
        <div>
          <img src={careerpage} alt="not found" />
        </div>
        <div className="font-semibold text-2xl  mb-8 pt-6">Skill required</div>
        <div className="flex flex-row">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Professional experience working with React Native in Software
            Development
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Meaningful experience working on medium to large React native
            application
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            An understanding of React Native best practices and a commitment to
            following them
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Ability to work through new and difficult React Native issues and
            contribute to libraries as needed
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Ability to create and maintain continuous integration and delivery
            of React Native applications
          </div>
        </div>
      </div>
    </div>
  );
}
function WebDeveloper() {
  return (
    <div className="flex xl:flex-row flex-col">
      <div className=" px-5 xl:w-2/3 lg:w-full">
        <div>
          <div className="font-semibold text-2xl mb-5 mt-5 md:mt-0">
            Web Designer
          </div>
          <div className="text-gray-600 ">
            We are looking for a creative Web Designer who can think out of the
            box and implement designs pixel-perfect. Candidate must have
            experience in HTML, CSS3, Tailwind, Bootstrap, Figma to site design.
            Additionally to have Figma to React components Or Vue components
            skills and any graphics tools to create the design.
          </div>
          <div className="flex flex-row my-5">
            <div className="font-semibold text-gray-800 ">Experience:</div>
            <div className="text-gray-600"> 1+</div>
          </div>
          <div className="flex flex-row mb-5">
            <div className="font-semibold text-gray-800 ">Openings:</div>
            <div className="text-gray-600">1 </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-2xl xl:mt-36 mt-8 mb-8">
            Responsibilities
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Possess knowledge and understanding of subjects such as qualitative
            estimation of webpage designing including Graphic Designing
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Design, Visual Design, User Testing, Responsive Design
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Design splash screen of Desk Top, Apple iPhone and Android mobile
            application
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Logo Designing / Website Designing
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            To generate creative ideas for making innovative websites
          </div>
        </div>
      </div>
      {/* Image Portion */}
      <div className="flex flex-col px-5">
        <div>
          <img src={careerpage} alt="not found" />
        </div>
        <div className="font-semibold text-2xl  mb-8 pt-6">Skill required</div>
        <div className="flex flex-row">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            User Experience Design, Interaction Design, Information
            Architecture, User Interface
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Good knowledge of Photshop, Illustrator and other desining tools
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Responsibilities included designing website layout using HTML, CSS,
            HTML5, CSS3, Bootstrap, and Material UI
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Responsive Web Site, Javascript/jQuery, Dreamweaver
          </div>
        </div>
      </div>
    </div>
  );
}
function QualityAnylist() {
  return (
    <div className="flex xl:flex-row flex-col">
      <div className=" px-5 xl:w-2/3 w-full">
        <div>
          <div className="font-semibold text-2xl mb-5 mt-5 md:mt-0">
            Quality Analyst
          </div>
          <div className="text-gray-600 ">
            We are looking for a great QA who is enthusiastic, very focused, and
            open-minded to do manual testing of website and mobile applications.
            Must have skills like application, website, API, database query
            testing experience with QA lifecycle.
          </div>
          <div className="flex flex-row my-5">
            <div className="font-semibold text-gray-800 ">Experience:</div>
            <div className="text-gray-600"> 1+</div>
          </div>
          <div className="flex flex-row mb-5">
            <div className="font-semibold text-gray-800 ">Openings:</div>
            <div className="text-gray-600">1 </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-2xl xl:mt-36 mt-8 mb-8">
            Responsibilities
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Review and analyze system specifications
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Create tests to identify software problems
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Execute test cases (manual) and analyze results
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Report bugs and errors to development teams
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">Help troubleshoot issues</div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Conduct post-release / post-implementation testing
          </div>
        </div>
      </div>
      {/* Image Portion */}
      <div className="flex flex-col px-5">
        <div>
          <img src={careerpage} alt="not found" />
        </div>
        <div className="font-semibold text-2xl  mb-8 pt-6">Skill required</div>
        <div className="flex flex-row">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Proven 1 yr experience as a Quality Assurance Tester or similar role
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Working knowledge of test techniques and compatibility with various
            software programs
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Up-to-date knowledge of software test design and testing
            methodologies
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Familiarity with Agile frameworks and regression testing is a plus
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Ability to document and troubleshoot errors
          </div>
        </div>{" "}
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Nice to have good verbal and written communication skills
          </div>
        </div>{" "}
        <div className="flex flex-row mt-2">
          <div>
            <i class="fa-solid fa-arrow-right-long text-violet-800 fa-lg "></i>
          </div>
          <div className="pl-4 text-gray-600">
            Project management tools: Jira, Confluence, Trello, Git, etc
          </div>
        </div>
      </div>
    </div>
  );
}

function Career() {
  const [valid, setIsValid] = useState(false);
  const [message, setMymessage] = useState("");
  const [jname, setJname] = useState();
  const [jemail, setJemail] = useState();
  const [jfile, setJfile] = useState();
  const [jmessage, setJmessage] = useState();
  const [jlanguage, setJlanguage] = useState();
  const [comment, setComment] = useState("");
  const location = useLocation();
  const ref = useRef();
  const emailRegex = /\S+@\S+\.\S+/;
  const validateEmail = (email) => {
    if (emailRegex.test(email)) {
      setComment("");
      return true;
    } else {
      setComment("Please enter a valid email!");
      return false;
    }
  };
  const descriptionBranch = [
    {
      name: "ReactJs Developer",
      path: "/career",
    },
    {
      name: "ReactJs + NodeJs Developer",
      path: "/career/react-node-developer",
    },
    {
      name: "Laravel + Vue Developer",
      path: "/career/laravel-vue-developer",
    },
    {
      name: "React Native Developer",
      path: "/career/react-native-developer",
    },
    {
      name: "Web Designer",
      path: "/career/web-designer",
    },
    {
      name: "Quality Analyst",
      path: "/career/quality-Anylist",
    },
  ];
  const checkAllField = (e) => {
    e.preventDefault();
    if (
      jname &&
      jemail &&
      jfile &&
      jlanguage &&
      jmessage &&
      validateEmail(jemail)
    ) {
      setIsValid(true);
      setJemail("");
      setJname("");
      ref.current.value = "";
      setJfile(null);
      setJlanguage("");
      setJmessage("");
      setMymessage("Thank You For Contact we will reach you soon");
    } else {
      setIsValid(false);
      setMymessage("This is Required Field");
    }

    const formData = new FormData();
    formData.append("your-name", jname);
    formData.append("your-email", jemail);
    formData.append("positions", jlanguage);
    formData.append("file-750", jfile);
    formData.append("your-message", jmessage);

    fetch(
      "https://infynno.com/wp-json/contact-form-7/v1/contact-forms/725/feedback",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());
  };

  return (
    <div>
      <div>
        <div className="items-center md:items-start mt-32 xl:px-44 lg:px-24 md:px-12 flex md:flex-row flex-col  ">
          <div className="space-y-0.5 ">
            {descriptionBranch.map((data) => (
              <div
                className={`bg-gray-100 h-10 w-72 pt-2 pl-4 text-gray-500  ${
                  location.pathname === data.path && "bg-blue-700 text-white "
                }`}
              >
                <Link to={data.path}>{data.name}</Link>
              </div>
            ))}
          </div>

          {/* Right Side portion */}
          <Outlet />
          <Routes>
            <Route path="/" element={<ReactDeveloper />} />
            <Route
              path="react-node-developer"
              element={<ReactNodeDeveloper />}
            />
            <Route
              path="laravel-vue-developer"
              element={<LaravelViewDeveloper />}
            />
            <Route
              path="react-native-developer"
              element={<ReactNativeDeveloper />}
            />
            <Route path="web-designer" element={<WebDeveloper />} />
            <Route path="quality-Anylist" element={<QualityAnylist />} />
          </Routes>
        </div>
      </div>
      <div className="xl:px-44 lg:px-24 md:px-12 px-4">
        <div className="text-bold text-4xl my-12">
          Get Your Job Position Today!
        </div>
        <form onSubmit={checkAllField}>
          <label>Your Name(required)</label>
          <br />
          <input
            type="text"
            className="w-full"
            value={jname}
            onChange={(e) => {
              setJname(e.target.value);
            }}
          ></input>
          <div className=" mb-7 text-red-600">
            {!valid && !jname && message}
          </div>
          <label>Your Email(required)</label>
          <br />
          <input
            type="text"
            className="w-full"
            value={jemail}
            onChange={(e) => {
              setJemail(e.target.value);
            }}
          ></input>
          <div className=" mb-7 text-red-600">
            {comment}
            {!valid && !jemail && message}
          </div>
          <lable>Position</lable>
          <br />
          <select
            name="programming Languages"
            className="w-full mb-7"
            value={jlanguage}
            onChange={(e) => {
              setJlanguage(e.target.value);
            }}
          >
            {descriptionBranch.map((data) => (
              <option>{data.name}</option>
            ))}
          </select>
          <label>Resume(required)</label>
          <br />
          <input
            type="file"
            className="w-full"
            value={jfile}
            style={{ border: "1px solid grey" }}
            ref={ref}
            onChange={(e) => {
              setJfile(e.target.value);
            }}
          ></input>
          <div className=" mb-7 text-red-600">
            {!valid && !jfile && message}
          </div>
          <label>Your Message</label>
          <br />
          <textarea
            rows="5"
            type="text"
            className="w-full"
            value={jmessage}
            onChange={(e) => {
              setJmessage(e.target.value);
            }}
          ></textarea>
          <div className=" mb-7 text-red-600">
            {!valid && !jmessage && message}
          </div>
          <button
            type="submit"
            className="mb-7 rounded-full text-white hover:text-blue-800 bg-blue-800  hover:bg-white hover:border-2 border-blue-800 w-32 h-10 mt-5 text-center"
          >
            Send
          </button>
          {valid && message ? (
            <div className="text-blue-700 border-2 border-emerald-600 py-2 pl-2 mb-4">
              {valid && message}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Career;
