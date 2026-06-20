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
            const detailsBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            detailsBtn.textContent = "Details";
            detailsBtn.classList = "details-btn";
            deleteBtn.classList = "deleteBtn";
            deleteBtn.dataset.id = object.id;
            detailsBtn.dataset.id = object.id;
            checkbox.type = "checkbox";
            divSplitter2.appendChild(detailsBtn);
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
            detailsBtn.addEventListener("click", (e) => {
                this.openDetailsModal(detailsBtn.dataset.id);
            });
        });
    }
    openDetailsModal (objectID) {
        let objectIndex;
        DOM.detailsModalDiv.textContent = "";
        for (let i = 0; i < myTodoList.todoItems.length; i++) {
            if (myTodoList.todoItems[i].id === objectID) {
                objectIndex = i;
            }
        }
        const detailsBtn = document.createElement("button");
        detailsBtn.textContent = "X";
        detailsBtn.classList = "closeTodo";
        detailsBtn.id = "closeDetails";
        DOM.detailsModalDiv.appendChild(detailsBtn);
        const titleDiv = document.createElement("div");
        const descDiv = document.createElement("div");
        const dataDiv = document.createElement("div");
        const priorityDiv = document.createElement("div");
        titleDiv.textContent = myTodoList.todoItems[objectIndex].title;
        descDiv.textContent = myTodoList.todoItems[objectIndex].description;
        dataDiv.textContent = myTodoList.todoItems[objectIndex].dueDate;
        priorityDiv.textContent = myTodoList.todoItems[objectIndex].priority;
        DOM.detailsModalDiv.appendChild(titleDiv);
        DOM.detailsModalDiv.appendChild(descDiv);
        DOM.detailsModalDiv.appendChild(dataDiv);
        DOM.detailsModalDiv.appendChild(priorityDiv);
        DOM.detailsModal.showModal();
        detailsBtn.addEventListener("click", (e) => {
            DOM.detailsModal.close();
        });
    }
}