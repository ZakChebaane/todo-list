import {DOM} from "./DOMDictionary.js";
import {myTodoList} from "./script.js";

export class DOMHandler {
    updateContent (todoItems) {
        DOM.contents.textContent = "";
        myTodoList.todoItems.forEach((object) => {
            const container = document.createElement("div");
            const myTitle = document.createElement("div");
            const checkbox = document.createElement("input");
            const divSplitter1 = document.createElement("div");
            const divSplitter2 = document.createElement("div");
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            deleteBtn.classList = "deleteBtn";
            deleteBtn.dataset.id = object.id;
            checkbox.type = "checkbox";
            checkbox.classList = "todo-checkbox";
            container.classList = "todo-list-element";
            divSplitter1.classList = "divSplitter1";
            divSplitter2.classList = "divSplitter2";
            myTitle.textContent = object.title;
            divSplitter1.appendChild(checkbox);
            divSplitter1.appendChild(myTitle);
            container.appendChild(divSplitter1);
            divSplitter2.appendChild(deleteBtn);
            container.appendChild(divSplitter2);
            DOM.contents.appendChild(container);
            deleteBtn.addEventListener("click", (e) => {
                myTodoList.removeTodoItem(deleteBtn.dataset.id);
                this.updateContent();
            });
        });
    }
}