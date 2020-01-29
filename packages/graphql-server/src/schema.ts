import { gql } from 'apollo-server';

export default gql`
type Task {
    id: String
    text: String
    priority: Int
}

type Query {
    tasks: [Task]
}

type Mutation {
    createTask(text: String, priority: Int): Task
}
`;