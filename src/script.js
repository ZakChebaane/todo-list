import "./styles.css";
import {todoListClass} from "./todoListClass.js";
import {DOM} from "./DOMDictionary.js";
import {todoItem} from "./todoItemClass.js";
import {DOMHandler} from "./DOMHandlerClass.js";

export const myTodoList = new todoListClass();
const myDOMHandler = new DOMHandler();
DOM.addTaskBtn.addEventListener("click", (e) => {
    DOM.modal.showModal();
});
DOM.submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    myTodoList.addTodoItems();
    myDOMHandler.updateContent(myTodoList.showTodoItems());
});
DOM.closeBtn.addEventListener("click", (e) => {
    DOM.form.reset();
    DOM.modal.close();
});
// remove later -- ONLY FOR TESTING
DOM.contents.addEventListener("dblclick", (e) => {
    myTodoList.showTodoItems();
})