import React from "react";
import "../styles/Projects.css";
import Card from "./Card";

const projects = [
  {
    id: 1,
    name: "Movie Shelf",
    description: "A personal virtual library created for a group assignment using data from The Movie Database API that keeps track of movies you've watched and allows you to find new titles to watch next.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196791/movieShelf_yly2rx.png",
    github: " https://github.com/shaneconwell/movie_shelf",
    deploy: "https://ancient-plateau-78988.herokuapp.com/",
    tech: "MySQL, Sequelize,  Javascripts, Handlebars.js, Express, ESlint, BCrypt.",
    bp1: "A personal virtual library created for a group project using data from The Movie Database API that keeps track of movies you've watched and allows you to find new titles to watch next.",
    bp2: "Managed the logic behind dynamically generating search query results and everything that went behind saving movie data selected by the user to their specific profiles.",
    bp3: "This app is deployed to heroku, has password hashed sign-up/login with search and save capabilities supported by a MySQL database.",
  },
  {
    id: 2,
    name: "Bucket",
    description: "A social media site made in collaboration with a group with the goal of connecting like-minded individuals and helping them check off their bucket list items.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1630158889/bucket-screenshot_imikfm.png   ",
    github: "https://github.com/shaneconwell/project-bucket",
    deploy: "https://bucket-sc.herokuapp.com/",
    tech: "MongoDB, GraphQL, Express, React.js, Node.js, Mapbox, Material UI",
    bp1: "Worked with teammates to coordinate the flow of information between front and back-end sections of the application, and determined logic for dynamically generating content received from out-of-application API calls.",
    bp2: "Developed the necessary queries and mutations for handling server-side data using GraphQL,and kept track of when and where updates to schemas had to occur.",
  },
  {
    id: 3,
    name: "Creative Corner",
    description: "Creative Corner was created in a group effort to help eliminate the struggles of an artist going through writer's or an overall creative block.  It uses client-side storage to store data and is interactive to user input.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196790/creativeCorner_yoldwe.png",
    github: "https://github.com/shaneconwell/creative-corner",
    deploy: "https://shaneconwell.github.io/weather-dashboard/",
    tech: "JavaScript, jQuery, UI Kit, Local Storage, The MET API, Quotable API",      
    bp1: "Worked on the technology responsible for searching a keyword, creating 3 new results that populate the page simultaneously & built the logic behind the save function that utilized the clients local storage.",
    bp2: "Implemented the dynamic population of the users 'Favorites' page, pulling the previously saved results onto a sortable gallery page.",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "A weather application that features dynamically updated HTML and CSS.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196790/weatherDashboard_mid7aj.png",
    github: "https://github.com/shaneconwell/weather-dashboard",
    deploy: "https://shaneconwell.github.io/weather-dashboard/",
    tech: "Javascript, CSS, Moment.js, OpenWeather API",
    bp1: "Incorporated the used of real time weather data fetched from the OpenWeather API. Rectely search cities are saved in local storage",
    bp2: "Reported information includes an icon representation of weather conditions, the temperature, the humidity, the wind speed, and a color reactive display of the current UV index.",
  },
  {
    id: 4,
    name: "Team Profile Generator",
    description: "A Node.js command-line application that takes in information about a team gathered using the npm package inquirer, then using javascript converts that information into a dynamically generated html profile page.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628214677/teamProfileGenerator-screenshot_s7ifrx.png",
    github: " https://github.com/shaneconwell/team-profile-generator",
    deploy: "https://drive.google.com/file/d/16dfvD2JhlFxjb6PlLQ6fWEyNDEGOZV7N/view",
    tech: " Javascript, Node.js, Jest, Inquirer",
    bp1: "Designed using test driven development through the use of the Jest npm package.",
    bp2: "Created a Node.js command-line application that takes in information about a team, gathered using the npm package Inquirer then converted that information into a dynamically generated html profile page.",
  
  },

  {
    id: 5,
    name: "Employee Managment System",
    description: "A simple CLI app for managing a company's employees. This application  It can also update employee roles.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628215354/cms-screenshot_x3wknq.png",
    github: "https://github.com/shaneconwell/content-managment-system",
    deploy: "https://drive.google.com/file/d/1C5wPheQhwkCMbgoZbY2UhrvqV6bbV-UF/view",
    tech: "node, inquirer, MySQL, console.table, dotenv",
    bp1: "Built an interface that allows a user to add & view departments, roles, and employees. Back-end data is stored in a mySQL database",
    bp2: "Helped with getting comfortable developing a CRUD workflow, and customizing command-line interaction.",

  },
    {
    id: 6,
    name: "Code Quiz",
    description: "a timed coding quiz with multiple-choice questions ",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628214685/codeQuiz-screenshot_wj2z8k.png",
    github: "https://github.com/shaneconwell/quizzy-quiz",
    deploy: "https://shaneconwell.github.io/quizzy-quiz/",
    tech: "HTML, CSS , Javascript",
    bp1: "Created a dynamically generated user-interactive quiz and collect user feedback to determine whether the answers to a question are correct.",
    bp2: "Utilized local storage to generate scores and appends a final page of results from the user data.",
  },

];

export default function Projects() {
  return <Card projects={projects} />;

}
