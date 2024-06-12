import "./global-css/global.css";


import Home from "./pages/home/home";



const homeValues={
    h1: "whoami",
    listItems: ["work", "stack", "contact", "rm -rf"],
}


const main=document.querySelector("#content");

main.appendChild(Home(homeValues));

