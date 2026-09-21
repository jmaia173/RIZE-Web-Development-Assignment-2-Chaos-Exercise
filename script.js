// TaskFlow - Team Task Management System
// Starter code for the Chaos Exercise

// Sample task data to show the structure
let tasks = [
    {
        id: 1,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2025-10-15",
        assignedTo: "",
        completed: false
    }
];

// Function to render all tasks to the page
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'card task-item';
        
        taskItem.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="task-content">
                        <div class="task-title">${task.title}</div>
                        <div class="task-description">${task.description}</div>
                        <div class="task-date">Due: ${task.dueDate}</div>
                        ${task.assignedTo ? `<div class="task-date">Assigned to: ${task.assignedTo}</div>` : ''}
                    </div>
                    <div class="task-actions">
                        <!-- TODO -->
                    </div>
                </div>
            </div>
        `;
        
        taskList.appendChild(taskItem);
    });
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderTasks();
    
    // TODO
    const taskForm = document.getElementById('task-form');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 1. read the values from the three inputs
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('task-due-date').value;

        // 2. build a task object like the sample one at the top of the file
        const newTask = { id: Date.now(), title: title, description: description, dueDate: dueDate, assignedTo: "",  completed: false};

        // 3. add it to the tasks array
        tasks.push(newTask);

        // 4. call renderTasks() so it shows up
        renderTasks();
});
});