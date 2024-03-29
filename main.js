#!/usr/bin/env
import inquirer from "inquirer";
let todos = [];
let condition = "true";
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: " What do you want to add in your to do list?"
        },
        {
            name: "Addmore",
            type: "confirm",
            message: "Do you want to increase your todo list?",
            default: "false"
        }]);
    todos.push(addTask.todo);
    condition = addTask.Addmore;
    console.log(todos);
}
