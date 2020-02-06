import { graphqlLambda, graphiqlLambda } from 'apollo-server-lambda';
import { makeExecutableSchema } from 'graphql-tools';
import { schema } from './schema';
import { resolvers } from './resolvers';

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