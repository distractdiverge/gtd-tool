export enum Priority {
    High = 0,
    Medium = 1,
    Low = 2,
};

export type Task = {
    id: string;
    text: string;
    priority: Priority;
    description?: string;
    project?: string;
    tags?: [];
};

export interface TaskService {
    getAll(): Task[];
    find(id: string): Task | undefined;
    create(text: string, priority: Priority): Task;
};