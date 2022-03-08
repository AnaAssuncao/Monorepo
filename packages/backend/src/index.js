const { ApolloServer, gql } = require('apollo-server');
const benefits = require('./benefits');
const challenges = require('./challenges');

const typeDefs = gql`
  type challenge {
    type: String
    description: String
    amount: String
  }

  type benefit {
    title: String
    description: String
  }

  type Query {
    challenges: [challenge]
    benefits: [benefit]
  }
`;

const resolvers = {
  Query: {
    challenges: () => challenges,
    benefits: () => benefits,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(process.env.PORT_BACKEND).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
