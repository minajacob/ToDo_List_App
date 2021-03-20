import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from '../../core/groups.service';
import { TasksService } from '../../core/tasks.service';
import { ITask, ITodoList } from '../../core/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.style.scss']
})
export class TodoListComponent implements OnInit {

  model: ITodoList = {} as ITodoList;

  constructor(private tasksSvc: TasksService, private groupsSvc: GroupsService, private router: Router) { }

  ngOnInit(): void {
    this.model = {
      tasks: [],
      groups: [],
      selectedTasks: []
    }

    this.tasksSvc.get().subscribe(tasks => {
      this.model.tasks = tasks;
    });

    this.groupsSvc.getAll().subscribe(groups => {
      this.model.groups = groups;
    });
  }

  taskClick(e: Event, task: ITask) {
    // Stop Event bubbling  
    e.stopPropagation();

    const tIndx = this.model.selectedTasks.indexOf(task.id);
    if (tIndx > -1) {
      this.model.selectedTasks.splice(tIndx, 1);
    } else {
      this.model.selectedTasks.push(task.id);
    }
  }

  taskRowClick(task: ITask){
    this.router.navigate([`app/list/view/${task.id}`]);
  }

  getGroupName(groupId: number){
    return this.model.groups.find(g => g.id == groupId)?.name;
  }

  deleteTask(e: Event, task: ITask) {
    // Stop Event bubbling  
    e.stopPropagation();
  }

  doneTask(e: Event, task: ITask) {
    // Stop Event bubbling  
    e.stopPropagation();
  }

}
