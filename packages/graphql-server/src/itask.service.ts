import { Task } from './models/task';
import { Priority } from './models/priority';

export interface TaskService {
  getAll(): Task[];
  find(id: string): Task | undefined;
  create(text: string, priority: Priority): Task;
}
