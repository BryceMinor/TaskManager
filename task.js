// TASK MANAGER

// Using a Template Literal because it recongnizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends the program (AKA Until the user enters CLOSE)
while (userInput !== `CLOSE`) {

    // Displays the menu again
    userInput = prompt(menu);
}

// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager`)