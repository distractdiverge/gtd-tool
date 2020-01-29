import MockTaskService from './mock.task.service';
import { Task } from './itask.service';
  
const aTaskService = new MockTaskService([
    {
        id: '1',
        text: 'Take out the garbage',
        priority: 0,
    },
    {
        id: '2',
        text: 'Clean the kitchen',
        priority: 2,
    },
]);

export default {
    Query: {
        tasks: () => aTaskService.getAll(),
    },
    Mutation: {
        createTask: (text: string, priority: number): Task =>
            aTaskService.create(text, priority)
    }
};