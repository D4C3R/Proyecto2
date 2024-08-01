// Hace que los eventos no se pierdan al recargar la página
function loadEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const eventContainer = document.getElementById('eventContainer');
    eventContainer.innerHTML = '';
    events.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event-item';
        eventDiv.innerHTML = `
            <br>
            <p>${event.text} - Fecha: ${event.date}</p>
            <button onclick="editEvent(${index})">Editar</button>
            <button onclick="deleteEvent(${index})">Eliminar</button>
        `;
        eventContainer.appendChild(eventDiv);
    });
}

// Añade eventos
function addEvent() {
    const eventInput = document.getElementById('event').value;
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const dateInput = document.getElementById('date').value;
    if (!eventInput || !dateInput) {
        alert('Por favor, completa ambos campos.');
        return;
    }
    events.push({ text: eventInput, date: dateInput });
    localStorage.setItem('events', JSON.stringify(events));
    document.getElementById('event').value = '';
    document.getElementById('date').value = '';
    loadEvents();
}

// Edita eventos
function editEvent(index) {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const newText = prompt('Edita el evento:', events[index].text);
    const newDate = prompt('Edita la fecha (YYYY-MM-DD):', events[index].date);

    if (newText !== null && newDate !== null) {
        events[index] = { text: newText, date: newDate };
        localStorage.setItem('events', JSON.stringify(events));
        loadEvents();
    }
}

// Eliminar eventos
function deleteEvent(index) {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    loadEvents();
}  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hace que las tareas no se pierdn al recargar la página
function loadTasks() {
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskContainer = document.getElementById('taskContainer');
taskContainer.innerHTML = '';
tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';
    taskDiv.innerHTML = `
        <br>
        <p>${task.text} - Prioridad: ${task.priority}</p>
        <button onclick="editTask(${index})">Editar</button>
        <button onclick="deleteTask(${index})">Eliminar</button>
    `;
    taskContainer.appendChild(taskDiv);
});
}        

// Añade tareas
function addTask() {
    const taskInput = document.getElementById('task').value;
    const priorityInput = document.getElementById('priority').value;
    if (!taskInput || !priorityInput) {        
        alert('Por favor, completa ambos campos.');        
        return;        
    }        
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskInput, priority: priorityInput });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('task').value = '';
    document.getElementById('priority').value = '';
    loadTasks();
}

// Edita tareas
function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newText = prompt('Edita la tarea:', tasks[index].text);
    const newPriority = prompt('Edita la prioridad:', tasks[index].priority);

    if (newText !== null && newPriority !== null) {
        tasks[index] = { text: newText, priority: newPriority };
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }
}

// Elimina tareas
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];        
    tasks.splice(index, 1);        
    localStorage.setItem('tasks', JSON.stringify(tasks));        
    loadTasks();    
}

/////////////////////////////////////////////////////////////

//Aplica las funcones para cargar//
window.onload = function () {
    loadTasks()     
    loadEvents ()       
} 