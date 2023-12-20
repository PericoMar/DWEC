import { saveTask, getTasks, onGetTasks, deleteTask } from "./firebase.js";

window.addEventListener("DOMContentLoaded", async (e) => {

    const taskForm = document.getElementById('task-form');
    const tasksContainer = document.getElementById('tasks-container');

    tasksContainer.innerHTML = "";

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = taskForm['task-title'].value;
        const description = taskForm['task-description'].value;
        saveTask(title, description);
    });

    const querySnapshot = await getTasks();
    onGetTasks((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const task = doc.data(); // Transforma a un objeto JS.

            tasksContainer.innerHTML += `
            <div>
              <h3 class="h5">${task.title}</h3>
              <p>${task.description}</p>
              <div>
                <button data-id="${doc.id}" class="btn-delete">
                  Borrar
                </button>
                <button data-id="${doc.id}">
                  Editar
                </button>
              </div>
              </div>`;

        });

        const btnsDelete = document.querySelectorAll(".btn-delete");
        btnsDelete.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                await deleteTask(e.target.dataset.id);
            })
        })
    });

})