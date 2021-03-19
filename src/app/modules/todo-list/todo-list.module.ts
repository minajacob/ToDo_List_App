import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { CoreModule } from '../core/core.module';


const routes: Routes = [
  { path: '', component: TodoListComponent }
]


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ControlsModule,
    CoreModule
  ]
})
export class TodoListModule { }
