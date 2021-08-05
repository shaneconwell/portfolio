import React from "react";
import "../styles/Projects.css";
import Card from "./Card";

const projects = [
  {
    id: 1,
    name: "Movie Shelf",
    description: "A personal virtual library created for a group project using data from The Movie Database API that keeps track of movies you've watched and allows you to find new titles to watch next.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196791/movieShelf_yly2rx.png",
    github: " https://github.com/shaneconwell/movie_shelf",
    deploy: "https://ancient-plateau-78988.herokuapp.com/",
    tech: " MySQL, Sequelize,  Javascripts, Handlebars.js, Express, ESlint, BCrypt."
  
  },
  {
    id: 2,
    name: "Creative Corner",
    description: "Creative Corner was created in a group effort to help eliminate the struggles of an artist going through writer's or an overall creative block.  It uses client-side storage to store data and is interactive to user input.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196790/creativeCorner_yoldwe.png",
    github: "https://github.com/shaneconwell/creative-corner",
    deploy: "https://shaneconwell.github.io/weather-dashboard/",
    tech: "JavaScript, jQuery, UI Kit, Local Storage, The MET API, Quotable API"
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "Incorporated the used of  real time weather data fetched from the OpenWeather API. Reported information includes an icon representation of weather conditions, the temperature, the humidity, the wind speed, and a color reactive display of the current UV index.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196790/weatherDashboard_mid7aj.png",
    github: "https://github.com/shaneconwell/weather-dashboard",
    deploy: "https://shaneconwell.github.io/weather-dashboard/",
    tech: "Javascript, CSS, Moment.js, OpenWeather API."
  },
  {
    id: 4,
    name: "Movie Shelf",
    description: "A personal virtual library created for a group project using data from The Movie Database API that keeps track of movies you've watched and allows you to find new titles to watch next.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196791/movieShelf_yly2rx.png",
    github: " https://github.com/shaneconwell/movie_shelf",
    deploy: "https://ancient-plateau-78988.herokuapp.com/",
    tech: " MySQL, Sequelize,  Javascripts, Handlebars.js, Express, ESlint, BCrypt."
  
  },
  {
    id: 5,
    name: "Creative Corner",
    description: "Creative Corner was created in a group effort to help eliminate the struggles of an artist going through writer's or an overall creative block.  It uses client-side storage to store data and is interactive to user input.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196790/creativeCorner_yoldwe.png",
    github: "https://github.com/shaneconwell/creative-corner",
    deploy: "https://shaneconwell.github.io/weather-dashboard/",
    tech: "JavaScript, jQuery, UI Kit, Local Storage, The MET API, Quotable API"
  },
  {
    id: 6,
    name: "Weather Dashboard",
    description: "Incorporated the used of  real time weather data fetched from the OpenWeather API. Reported information includes an icon representation of weather conditions, the temperature, the humidity, the wind speed, and a color reactive display of the current UV index.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196790/weatherDashboard_mid7aj.png",
    github: "https://github.com/shaneconwell/weather-dashboard",
    deploy: "https://shaneconwell.github.io/weather-dashboard/",
    tech: "Javascript, CSS, Moment.js, OpenWeather API."
  }
  // {
  //   id: 4,
  //   name: "Cake Mix",
  //   purchased: false
  // },
  // {
  //   id: 5,
  //   name: "Carrots",
  //   purchased: false
  // },
  // {
  //   id: 6,
  //   name: "Juice",
  //   purchased: true
  // }
];

export default function Projects() {
  return <Card projects={projects} />;
  // return (
    // <div className="projects-body container-xlg">
    //   <div className="row">
    //     <div>
    //       <h1 id="projects" className="text-center ">
    //         Projects
    //       </h1>
    //       <div id="my-projects" className=" mx-auto">
    //         <div className=" project-container container   pb-5">
    //           <div className="row  justify-content-around my-5 ">
    //             <div className=" card  col-12 col-sm-12 mx-auto col-md-3 ">
    //               <div className="p-2 py-4">
    //                 <img
    //                   src={movieShelfScreenshot}
    //                   className="img-fluid"
    //                   alt="..."
    //                 ></img>
    //                 <div className="text">
    //                   <h4>Movie Shelf</h4>
    //                 </div>
    //                 <div>
    //                   <button
    //                     id="github-button"
    //                     className="btn-primary m-2 position-absolute bottom-0 end-0 ">
    //                     <img
    //                   src={github}
    //                   className="img-fluid"
    //                   alt="..."
    //                 ></img>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={"card col-12 col-sm-12 mx-auto col-md-3 "}>
    //               <div className="p-2 py-4">
    //                 <img
    //                   src={creativeCornerScreenshot}
    //                   className="img-fluid"
    //                   alt="..."
    //                 ></img>
    //                 <div className="text">
    //                   <h4>Creative Corner</h4>
    //                 </div>
    //                 <div>
		// 			<button
    //                     id="github-button"
    //                     className="btn-primary m-2 position-absolute bottom-0 end-0 ">
    //                     <img
    //                   src={github}
    //                   className="img-fluid"
    //                   alt="..."
    //                 ></img>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={"card col-12 col-sm-12 mx-auto col-md-3 "}>
    //               <div className="p-2 py-4 ">
    //                 <img
    //                   src={weatherDashboardScreenshot}
    //                   className="img-fluid"
    //                   alt="..."
    //                 ></img>
    //                 <div className="text">
    //                   <h4>Weather Dashboard</h4>
    //                 </div>
    //                 <div className="">
		// 			<button
    //                     id="github-button"
    //                     className="btn-primary m-2 position-absolute bottom-0 end-0 ">
    //                     <img
    //                   src={github}
    //                   className="img-fluid"
    //                   alt="..."
    //                 ></img>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  // );
}
