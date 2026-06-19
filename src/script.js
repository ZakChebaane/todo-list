import "./styles.css";
import {todoListClass} from "./todoListClass.js";
import {DOM} from "./DOMDictionary.js";
import {todoItem} from "./todoItemClass.js";

const myTodoList = new todoListClass();
DOM.addTaskBtn.addEventListener("click", (e) => {
    DOM.contents.textContent = "";
    DOM.modal.showModal();
})
DOM.submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    myTodoList.addTodoItems();
});
DOM.closeBtn.addEventListener("click", (e) => {
    DOM.form.reset();
    DOM.modal.close();
});
// remove later -- ONLY FOR TESTING
DOM.contents.addEventListener("dblclick", (e) => {
    myTodoList.showTodoItems();
})