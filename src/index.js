import { GraphQLServer } from 'graphql-yoga';
import { Query, Mutation, User, Post, Comment } from './resolvers';
import db from './db';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    User,
    Post,
    Comment
  },
  context: {
    db
  }
});

server.start(() => console.log('SERVER RUNNING...'));