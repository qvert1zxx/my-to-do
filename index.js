var taskInputs = document.getElementById("task-form");
var confirmBtns = document.getElementById("confirm-btn");
var taskss = document.getElementById("tasks");
var btnRemvs = document.getElementsByClassName("del-task");
confirmBtns === null || confirmBtns === void 0 ? void 0 : confirmBtns.addEventListener("click", function () {
    var taskValue = taskInputs.value.trim();
    if (taskValue) {
        createTasks(taskValue);
        taskInputs.value = "";
    }
});
taskInputs.addEventListener("keyup", function (e) {
    var taskValue = taskInputs.value.trim();
    if (e.keyCode === 13 && taskValue) {
        createTasks(taskValue);
        taskInputs.value = "";
    }
});
function createTasks(task) {
    var taskHTML = "\n        <div class=\"task\">\n            <p class=\"task-value\">".concat(task, "</p>\n            <div class=\"btn-task\">\n                <input type=\"button\" class=\"task-done-btn button\">\n                <input type=\"button\" class=\"del-task button\">\n            </div>\n        </div>\n    ");
    taskss === null || taskss === void 0 ? void 0 : taskss.insertAdjacentHTML("beforeend", taskHTML);
}
taskss === null || taskss === void 0 ? void 0 : taskss.addEventListener("click", function (e) {
    var deleteBtn = e.target;
    deleteBtn = deleteBtn.closest(".del-task");
    var doneBtn = e.target;
    doneBtn = doneBtn.closest(".task-done-btn");
    if (deleteBtn) {
        var taskDiv = deleteBtn.closest(".task");
        taskDiv.remove();
    }
    else if (doneBtn) {
        var taskDiv = doneBtn.closest(".task");
        taskDiv.classList.toggle("task-done");
    }
});
