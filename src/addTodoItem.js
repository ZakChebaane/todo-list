import {todoItem} from "./todoItemClass.js";

export function addTodoItem () {
    const modal = document.querySelector("#todoModal");
    const closeBtn = document.getElementById("closeTodo");
    const submitBtn = document.getElementById("submit-btn");
    const form = document.querySelector(".modalForm");
    // inputs
    const titleInput = document.getElementById("name-todo");
    const descInput = document.getElementById("desc-todo");
    const dueDate = document.getElementById("dueDate-todo");
    const priority = document.getElementById("priority-todo");

    modal.showModal();
    closeBtn.addEventListener("click", (e) => {
        form.reset();
        modal.close();
    });
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        form.reset();
        modal.close();
        // add to array

    });
}