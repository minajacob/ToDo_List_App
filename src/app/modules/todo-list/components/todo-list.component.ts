import { Component, OnInit } from '@angular/core';
import { ITask, ITodoList } from './todo-list.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.style.scss']
})
export class TodoListComponent implements OnInit {

  model: ITodoList = {} as ITodoList;

  constructor() { }

  ngOnInit(): void {
    this.model = {
      tasks: [
        { id: 1, name: "Task 1", created: Date.now(), deleted: false, dueDate: new Date("20/03/2021"), done: false, groupId: 1 },
        { id: 2, name: "Task 2", created: Date.now(), deleted: false, dueDate: new Date("20/03/2021"), done: false, groupId: 2 },
        { id: 3, name: "Task 3", created: Date.now(), deleted: false, dueDate: new Date("20/03/2021"), done: false, groupId: 3 },
        { id: 4, name: "Task 4", created: Date.now(), deleted: false, dueDate: new Date("20/03/2021"), done: false, groupId: 1 },
        { id: 5, name: "Task 5", created: Date.now(), deleted: false, dueDate: new Date("20/03/2021"), done: false, groupId: 2 },
        { id: 6, name: "Task 6", created: Date.now(), deleted: false, dueDate: new Date("20/03/2021"), done: false, groupId: 6 }
      ],
      selectedTasks: []
    }
  }

  taskClick(task: ITask) {
    const tIndx = this.model.selectedTasks.indexOf(task.id);
    if (tIndx > -1) {
      this.model.selectedTasks.splice(tIndx, 1);
    } else {
      this.model.selectedTasks.push(task.id);
    }
  }

  // get tasksGrouped() {
  //   this.model.tasks.
  // }

}
