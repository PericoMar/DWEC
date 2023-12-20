import { saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask } from "./firebase.js";

const taskForm = document.getElementById('task-form');
const tasksContainer = document.getElementById('tasks-container');



let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {

    taskForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const title = taskForm['task-title'];
        const description = taskForm['task-description'];
        try {
            if (!editStatus) {
                await saveTask(title.value, description.value);
            } else {
                await updateTask(id, {
                    title: title.value,
                    description: description.value,
                });

                editStatus = false;
                id = "";
                taskForm["btn-task-form"].innerText = "Save";
            }

            taskForm.reset();
            title.focus();
        } catch (error) {
            console.log(error);
        }
    });

    const querySnapshot = await getTasks();
    onGetTasks((querySnapshot) => {

        tasksContainer.innerHTML = "";
        
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
                <button data-id="${doc.id}" class="btn-edit">
                  Editar
                </button>
              </div>
              </div>`;

        });



        const btnsDelete = document.querySelectorAll(".btn-delete");
        btnsDelete.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                console.log(e.target.dataset.id);
                await deleteTask(e.target.dataset.id);
            })
        });


        const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
        btnsEdit.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                try {
                    const doc = await getTask(e.target.dataset.id);
                    const task = doc.data();
                    taskForm["task-title"].value = task.title;
                    taskForm["task-description"].value = task.description;

                    editStatus = true;

                    id = doc.id;      // capturamos id del registro
                    taskForm["btn-task-form"].innerText = "Update";  // cambiamos texto del botón "Guardar"

                } catch (error) {
                    console.log(error);
                }
            });
        });

    });

})