import {todoListClass} from "./todoListClass.js";

export const DOM = {
    addTaskBtn : document.getElementById("add-task"),
    homeBtn : document.getElementById("home"),
    projectsBtn : document.getElementById("projects"),
    contents : document.getElementById("content"),
    modal : document.querySelector("#todoModal"),
    closeBtn : document.getElementById("closeTodo"),
    submitBtn : document.getElementById("submit-btn"),
    form : document.querySelector(".modalForm"),
    titleInput : document.getElementById("name-todo"),
    descInput : document.getElementById("desc-todo"),
    dueDate : document.getElementById("dueDate-todo"),
    priority : document.getElementById("priority-todo"),
    detailsModal : document.getElementById("detailsModal"),
    detailsModalDiv : document.getElementById("detailsContainer"),
}