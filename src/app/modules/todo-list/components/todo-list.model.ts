
export interface ITask {
    id: number;
    name: string;
    created: any;
    done: boolean;
    deleted: boolean;
    dueDate: any;
    groupId: number
}

export interface ITodoList {
    tasks : ITask[];
    selectedTasks: number[];
}