const {buildSchema} = require('graphql');
const {prestadores} = require('./db');

const schema = buildSchema(`
  type Query{
    allPrestadores: [Prestador!]!
    prestador(id: ID!): Prestador
  }

  type Prestador{
    id: ID,
    name: String,
    locais: [Prestador!]
  }
`);

const getPrestador = (args, context) => {
  const { id } = args;
  const selectedPrestador = prestadores.prestadoresByNif[prestadores.prestadoresByID[id]];

  return selectedPrestador;
};

const getAllPrestadores = (args, context) => {
  const {request} = context;
  console.log(context.headers);
  console.log('Teste');
  return prestadores.allIDs.map(id => (prestadores.prestadoresByNif[prestadores.prestadoresByID[id]]));
};

const resolvers = {
  prestador: getPrestador,
  allPrestadores: getAllPrestadores
};

module.exports = {
  schema,
  resolvers
};