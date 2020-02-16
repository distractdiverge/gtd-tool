import MockTaskService from './mock.task.service';
import Priority from './models/priority';
import { Task } from './models/task';

const aTaskService = new MockTaskService();
aTaskService.create('Take out the garbage', Priority.Low);
aTaskService.create('Clean the kitchen', Priority.Medium);

export default {
  Priority: {
    High: Priority.High,
    Medium: Priority.Medium,
    Low: Priority.Low,
  },
  Query: {
    tasks: (): Task[] => aTaskService.getAll(),
  },
  Mutation: {
    createTask: (param1, args): Task => aTaskService.create(args.text, args.priority),
  },
};
