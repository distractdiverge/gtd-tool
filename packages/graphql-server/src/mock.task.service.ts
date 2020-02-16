import uuid from 'uuid/v4';
import * as R from 'ramda';
import { TaskService } from './itask.service';
import { Task } from './models/task';
import { Priority } from './models/priority';

export default class MockTaskService implements TaskService {
  private tasks: { [id: string]: Task };

  constructor() {
    this.tasks = {};
  }

  getAll(): Task[] {
    const getSize = R.pipe(R.keys, R.length);
    console.log(`getting tasks: ${getSize(this.tasks)}`);
    return R.values(this.tasks);
  }

  find(id: string): Task | undefined {
    return this.tasks[id];
  }

  create(text: string, priority: Priority): Task {
    const id = uuid();
    const aTask = {
      id,
      text,
      priority,
    };
    console.log(`creating task: ${JSON.stringify(aTask, null, 2)}`);

    this.tasks[id] = aTask;

    return aTask;
  }
}
