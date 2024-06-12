import Terminal from "./components/terminal";
import style from "./home.lazy.css";

style.use();

export default function Home(obj){

    const section=document.createElement("section");

    const h1=document.createElement("h1");
    h1.textContent=obj.h1;

    const terminal=Terminal(obj.listItems);
    
    section.appendChild(h1);
    section.appendChild(terminal);
    
    return section;
}