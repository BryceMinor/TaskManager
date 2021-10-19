// TASK MANAGER

// Using a Template Literal because it recongnizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
    `Charge MacBook`,
    `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ``;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends the program (AKA Until the user enters CLOSE)
while (userInput !== `CLOSE`) {

    // Checks if user entered TASKS
    if (userInput === `TASKS`){

        // The For Of Loop is used here to concatenate each task (AKA Item) in the tasks array to the showTasks string variable
        for (tasks of tasks){

            // Using \n to create a new line (AKA Line Break) after each task
            showTasks += `${task}\n`;
        }

        // Display the current tasks to the user
        alert(showTasks);

        // Set the value of the showTasks string variable back to an empty string
        showTasks = "";
    }

    // Displays the menu again
    userInput = prompt(menu);
}

// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager`)