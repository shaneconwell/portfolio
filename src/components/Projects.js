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
    tech: "Javascript, CSS, Moment.js, OpenWeather API"
  },
  {
    id: 4,
    name: "Team Profile Generator",
    description: "A Node.js command-line application that takes in information about a team gathered using the npm package inquirer, then using javascript converts that information into a dynamically generated html profile page.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628214677/teamProfileGenerator-screenshot_s7ifrx.png",
    github: " https://github.com/shaneconwell/team-profile-generator",
    deploy: "https://drive.google.com/file/d/16dfvD2JhlFxjb6PlLQ6fWEyNDEGOZV7N/view",
    tech: " Javascript, Node.js, Jest, Inquirer"
  
  },
  {
    id: 5,
    name: "Code Quiz",
    description: "A quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628214685/codeQuiz-screenshot_wj2z8k.png",
    github: "https://github.com/shaneconwell/quizzy-quiz",
    deploy: "https://shaneconwell.github.io/quizzy-quiz/",
    tech: "HTML, CSS , Javascript"
  },
  {
    id: 6,
    name: "Content Managment System",
    description: "A simple CLI app for managing a company's employees using node, inquirer, and MySQL. This application allows a user to add & view departments, roles, and employees. It can also update employee roles.",
    img: "https://res.cloudinary.com/dllm7cfrg/image/upload/v1628215354/cms-screenshot_x3wknq.png",
    github: "https://github.com/shaneconwell/content-managment-system",
    deploy: "https://drive.google.com/file/d/1C5wPheQhwkCMbgoZbY2UhrvqV6bbV-UF/view",
    tech: "node, inquirer, and MySQL ,console.table , dotenv"
  }

];

export default function Projects() {
  return <Card projects={projects} />;

}
