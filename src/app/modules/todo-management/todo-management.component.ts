import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TasksService } from '../core/tasks.service';

@Component({
  selector: 'app-todo-management',
  templateUrl:'todo-management.component.html',
  styleUrls: ['todo-management.style.scss']
})
export class TodoManagementComponent implements OnInit {

  newTaskForm = this.fb.group({
    name: ['', Validators.required],
    priority: ['', Validators.required],
    dueDate: ['', Validators.required],
    groupId: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private tasksSvc: TasksService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.newTaskForm.disable();
  }

  addNewTask() {
    if (this.newTaskForm.valid) {
      this.tasksSvc.add(this.newTaskForm.value).subscribe(res => {
        this.snackBar.open("Task added successfully", "close", { duration: 2000 });
      })
    }
  }

  getControl(ctrlName: string){
    return this.newTaskForm.get(ctrlName);
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

}
