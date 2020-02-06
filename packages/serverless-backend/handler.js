const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda');
const { makeExecutableSchema } = require('graphql-tools');
const { schema } = require('./schema');
const { resolvers } = require('./resolvers');

const myGraphQLSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

const graphqlHandler = async (event, context, callback) => {
  
  // Intercept the callback and add a Header
  const callbackWithHeaders = (error, output) => {
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  };

  const handler = graphqlLambda({ schema: myGraphQLSchema });
  return handler(event, context, callbackWithHeaders);
};

module.exports.graphqlHandler = graphqlHandler;