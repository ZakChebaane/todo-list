import "./styles.css";

class todoItem {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
    }
}
const myTodo = new todoItem(
    "go to beach",
    "swim at beach",
    "15/06/2026",
    1,
    false,
);
