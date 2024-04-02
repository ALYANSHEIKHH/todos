#! usr/bin/env node
import inquirer from "inquirer";
import { todo } from "node:test";
let todos = [];
let condition = true;
while(condition)
{



let addTask = await inquirer.prompt([{
    name:"todo",
    type: "input",
    message:"What do you want to add in your todos ?"},
     
     
      {
          name :"addMore",
        type :"confirm",
        message:"Are you sure you want to add more in your todos ?",
        default:"false"
      
}
]
)


todos.push(addTask.todo);

condition = (addTask.addMore)
console.log(todos);
};