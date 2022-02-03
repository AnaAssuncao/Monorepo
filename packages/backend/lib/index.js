"use strict";

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var _benefits = require('./benefits');

var _challenges = require('./challenges');

var typeDefs = gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type challenge {\n    type: String\n    description : String\n    amount: String\n  }\n\n  type benefit {\n    title: String\n    description : String\n  }\n\n  type Query {\n    challenges: [challenge]\n    benefits: [benefit]\n  }\n\n"])));
var resolvers = {
  Query: {
    challenges: function challenges() {
      return _challenges;
    },
    benefits: function benefits() {
      return _benefits;
    }
  }
};
var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
server.listen(4000).then(function (_ref) {
  var url = _ref.url;
  console.log("\uD83D\uDE80  Server ready at ".concat(url));
});