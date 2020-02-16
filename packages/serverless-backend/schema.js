const fs = require('fs');
const path = require('path');

const schema = fs.readFileSync(
  path.join(__dirname, 'schema.gql'),
  'utf8',
);

module.exports = { schema };
