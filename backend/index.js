const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./WeatherAPI/WeatherSchema");
const { resolvers } = require("./WeatherAPI/WeatherResolvers");
const { WeatherAPI } = require("./WeatherAPI/WeatherAPI");

const server = new ApolloServer({
  cors: {
    origin: "*"
  },
  typeDefs,
  resolvers,
  dataSources: () => {
    return { WeatherAPI: new WeatherAPI() };
  }
});

const PORT = process.env.PORT || 4000;
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
