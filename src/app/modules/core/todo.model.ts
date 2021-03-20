
export enum Priority {
    Low,
    Normal,
    High
}

export interface IGroup {
    id: number;
    name: string;
}

export interface ITask {
    id: number;
    name: string;
    created: any;
    done: boolean;
    deleted: boolean;
    dueDate: any;
    groupId: number;
    priority?: Priority
}

export interface ITodoList {
    tasks : ITask[];
    groups: IGroup[];
    selectedTasks: number[];
}