import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.style.scss']
})
export class LayoutComponent implements OnInit {
  title = 'ToDoListApp';

  constructor() { }

  ngOnInit(): void {
  }

}
