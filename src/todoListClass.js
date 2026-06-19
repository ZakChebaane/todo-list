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
    removeTodoItem (objectID) {
        for (let i = 0; i < this.todoItems.length; i++) {
            if (this.todoItems[i].id === objectID) {
                this.todoItems.splice(i, 1);
            }
        }
    }
    showTodoItems () {
        return this.todoItems;
    }
}