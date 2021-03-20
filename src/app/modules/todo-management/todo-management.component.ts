import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../core/tasks.service';
import { Priority } from '../core/todo.model';
import { ITodoManageModel } from './todo-management.model';

@Component({
  selector: 'app-todo-management',
  templateUrl:'todo-management.component.html',
  styleUrls: ['todo-management.style.scss']
})
export class TodoManagementComponent implements OnInit {

  model: ITodoManageModel;

  constructor(private fb: FormBuilder, private tasksSvc: TasksService, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute, private router: Router) {
    this.model = {
      newTaskForm: this.fb.group({
        name: ['', Validators.required],
        priority: ['', Validators.required],
        dueDate: ['', Validators.required],
        groupId: ['', Validators.required]
      }),
      addMode: false,
      viewMode: false,
      editMode: false
    }
  }

  ngOnInit(): void {
    const snap = this.activatedRoute.snapshot;
    if (snap.data.pageType == 'view') {
      this.model.newTaskForm.disable();
      this.model.viewMode = true;
      this.getTaskData(this.taskId);
    } else if (snap.data.pageType == 'edit'){
      this.model.editMode = true;
      this.getTaskData(this.taskId);
    } else {
      this.model.addMode = true;
    }
  }

  get taskId() {
    return this.activatedRoute.snapshot.params['taskId'];
  }

  getTaskData(taskId: number){
    this.tasksSvc.getById(taskId).subscribe(res => {
      if (res) {
        this.model.newTaskForm.patchValue(res);
      }
    })
  }

  addNewTask() {
    if (this.model.newTaskForm.valid) {
      this.tasksSvc.add(this.model.newTaskForm.value).subscribe(res => {
        this.snackBar.open("Task added successfully 😀", "close", { duration: 2000 });
      })
    }
  }

  getControl(ctrlName: string){
    return this.model.newTaskForm.get(ctrlName);
  }

  get titleCtrl() {
    return this.getControl('name');
  }

  get priorityCtrl() {
    return this.getControl('priority');
  }

  get dueDateCtrl() {
    return this.getControl('dueDate');
  }

  get groupIdCtrl(){
    return this.getControl('groupId');
  }

  get priorities(){
    let returnList = []
    for (const prop in Priority) {
      if (!isNaN(Number(prop))) {
        returnList.push({ key: +prop, value: Priority[prop]  })
      }
      
    }
    // console.log(returnList);
    return returnList;
  }

  trackByPriority(item:any) {
    return item.key;
  }

  editTask() {
    this.router.navigate([`app/list/edit/${this.taskId}`]);
  }

  updateTask(){
    this.tasksSvc.update({id: this.taskId, ...this.model.newTaskForm.value}).subscribe(res => {
      if (res) {
        this.snackBar.open("Task updated successfully 😀", "close", { duration: 2000 });
      } else {
        this.snackBar.open("Task not updated successfully 😨", "close", { duration: 2000 });
      }
    })
  }

}
