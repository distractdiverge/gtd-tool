import { Priority } from "./priority";

export type Task = {
    id: string;
    text: string;
    priority: Priority;
    description?: string;
    project?: string;
    tags?: [];
};