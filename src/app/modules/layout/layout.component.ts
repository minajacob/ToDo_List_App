import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.style.scss']
})
export class LayoutComponent implements OnInit {

  date: Observable<number>;

  constructor() {
    this.date = interval(1000).pipe(map(t => Date.now()));
  }

  ngOnInit(): void {
    
  }

}
