import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ITask, Priority } from "./todo.model";

@Injectable({
    providedIn: 'root'
})

export class TasksService {

    tasks: ITask[] = [
        { id: 1, name: "Task 1", created: Date.now(), deleted: false, dueDate: new Date("03/20/2021"), done: false, groupId: 1, priority: Priority.Low },
        { id: 2, name: "Task 2", created: Date.now(), deleted: false, dueDate: new Date("03/10/2021"), done: false, groupId: 2, priority: Priority.High },
        { id: 3, name: "Task 3", created: Date.now(), deleted: false, dueDate: new Date("03/15/2021"), done: false, groupId: 3, priority: Priority.Normal },
        { id: 4, name: "Task 4", created: Date.now(), deleted: false, dueDate: new Date("03/22/2021"), done: false, groupId: 1, priority: Priority.Low },
        { id: 5, name: "Task 5", created: Date.now(), deleted: false, dueDate: new Date("03/03/2021"), done: false, groupId: 2, priority: Priority.Normal },
        { id: 6, name: "Task 6", created: Date.now(), deleted: false, dueDate: new Date("02/20/2021"), done: false, groupId: 6, priority: Priority.High }
    ];

    constructor(private httpClient: HttpClient) { }

    get(): Observable<ITask[]> {
        return of(this.tasks)
    }

    getById(id: number): Observable<ITask | undefined> {
        return of(this.tasks.find(t => t.id == id));
    }

    add(task: ITask) {
        task.id = this.tasks.length + 1;
        this.tasks.push(task);
        return of(true);
    }

    remove(taskId: number) {
        const taskIndx = this.tasks.findIndex(t => t.id == taskId);
        if (taskIndx > -1) {
            this.tasks.splice(taskIndx, 1);
        } else {
            
        }
    }

    removeTasks(tasksIds: number[]) {
        this.tasks = this.tasks.filter(t => !tasksIds.includes(t.id));
    }

    update(task: ITask) {
        let taskIndx = this.tasks.findIndex(t => t.id == task.id);
        if (taskIndx > -1) {
            this.tasks[taskIndx] = { ...this.tasks[taskIndx], ...task };
            return of(true);
        }
        return of(false);
    }
}