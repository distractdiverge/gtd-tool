import fs from 'fs';
import path from 'path';

const schema = fs.readFileSync(
    path.join(__dirname, 'schema.gql')
);

export { schema };