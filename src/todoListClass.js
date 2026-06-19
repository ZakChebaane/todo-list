import {todoItem} from "./todoItemClass.js";
import {DOM} from "./DOMDictionary.js";

export class todoListClass {
    constructor() {
        this.todoItems = [new todoItem("zak"), new todoItem("adam")];
    }
    addTodoItems () {
        const newTodoItem = new todoItem(DOM.titleInput.value, DOM.descInput.value, DOM.dueDate.value, DOM.priority.value);
        DOM.form.reset();
        DOM.modal.close();
        this.todoItems.push(newTodoItem);
    }
    showTodoItems () {
        return this.todoItems;
    }
}