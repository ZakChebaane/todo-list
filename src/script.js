import "./styles.css";
import {addTodoItem} from "./addTodoItem.js";


const addTaskBtn = document.getElementById("add-task");
const homeBtn = document.getElementById("home");
const projectsBtn = document.getElementById("projects");
const contents = document.getElementById("content");
addTaskBtn.addEventListener("click", (e) => {
    contents.textContent = "";
    addTodoItem();
})