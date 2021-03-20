import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { CoreModule } from '../core/core.module';
import { TodoManagementModule } from '../todo-management/todo-management.module';
import { TodoManagementComponent } from '../todo-management/todo-management.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'all', component: TodoListComponent },
  { path: 'view/:taskId', component: TodoManagementComponent, data: { pageType: "view" } },
  { path: 'edit/:taskId', component: TodoManagementComponent, data: { pageType: "edit" } }
]


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ControlsModule,
    CoreModule,
    FormsModule,
    TodoManagementModule
  ],
  exports: [RouterModule]
})
export class TodoListModule { }
