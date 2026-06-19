import {DOM} from "./DOMDictionary.js";

export class DOMHandler {
    updateContent (todoItems) {
        DOM.contents.textContent = "";
        todoItems.forEach((object) => {
            const container = document.createElement("div");
            const myTitle = document.createElement("div");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList = "todo-checkbox";
            container.classList = "todo-list-element";
            myTitle.textContent = object.title;
            container.appendChild(checkbox);
            container.appendChild(myTitle);
            DOM.contents.appendChild(container);
        });
    }
}