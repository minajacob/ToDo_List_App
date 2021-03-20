import { FormGroup } from "@angular/forms";

export interface ITodoManageModel {
    newTaskForm: FormGroup,
    viewMode: boolean;
    addMode: boolean;
    editMode: boolean;
}