import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IGroup } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  groups: IGroup[] = [
    {id: 1 , name : "Design Group 🏗"},
    {id: 2 , name : "UX/UI Group 🤵🏛"},
    {id: 3 , name : "Backend Group 🔙"},
    {id: 4 , name : "Mobile Group 📱"},
    {id: 5 , name : "Cloud Group 👽"},
    {id: 6 , name : "DevOps Group 💩"},
  ]

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return of(this.groups);
  }
}
