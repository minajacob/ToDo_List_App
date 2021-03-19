import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "list",
        loadChildren: () => import('../app/modules/todo-list/todo-list.module').then(m => m.TodoListModule)
      },
      // {
      //   path: "new",
      //   loadChildren: () => import('')
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
