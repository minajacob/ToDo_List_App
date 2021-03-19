import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: TodoListComponent }
]


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoListModule { }
