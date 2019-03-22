const express = require('express');
const graphQLHTTP = require('express-graphql');
const {buildSchema} = require('graphql');
const {prestadores} = require('./db');
//const {schema, resolvers} = require('./schema');

const app = express();

const schema = buildSchema(`
  type Query{
    user(id:String): String
    prestador(nif:String): Prestador
    allPrestadores: [Prestador]
  }

  type Prestador{
    id: ID,
    name: String,
    locais: [Prestador!]
  }
`);



const resolvers = {
  user: (args, context, info) => {
    console.log(context.headers);
    return args.id;
  },
  allPrestadores:() => 
    prestadores.allIDs.map(pID => prestadores.prestadoresByNif[pID]),
  prestador:(args, context) => {
    const {nif} = args;
    return prestadores.prestadoresByNif[nif];
  }
};


app.use('/', graphQLHTTP({
  schema: schema,
  rootValue:resolvers,
  graphiql:true
}));

app.listen(3000);
