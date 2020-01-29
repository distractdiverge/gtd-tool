import { Task, Priority, TaskService } from './itask.service';

export default class MockTaskService implements TaskService {

    private tasks: Task[] = [];

    constructor(initialTasks: Task[]) {
        this.tasks = initialTasks;
    }

    getAll(): Task[] {
        console.log(`getting tasks: ${this.tasks.length}`);
        return this.tasks;
    }
    
    find(id: string): Task | undefined {
        
        for (let index = 0; index < this.tasks.length; index++) {
            const element = this.tasks[index];
            if (element.id === id) {
                return element

            }
        }
        
        return undefined;
    }
    
    create(text: string, priority: Priority): Task {
        console.log('creating task');
        const aTask: Task = {
            id: `${this.tasks.length}`,
            text,
            priority,
        }

        this.tasks.push(aTask);

        return aTask;
    }
};