const { ApolloServer } = require('apollo-server');
const jwt = require('jsonwebtoken');
require('dotenv').config('variables.env');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');


//Conectar a la BD
conectarDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        //console.log(req.headers['authorization']);

        const token = req.headers['authorization'] || ''; //Si token no existe sera un string vacio ''
        if (token) {
            try {
                const usuario = jwt.verify(token.replace('Bearer ',''), process.env.SECRETA); //Verificamos el token con la misma clave con la que fue firmada
                console.log(usuario);
                return {
                    usuario
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
});

server.listen({ port: process.env.PORT || 4000 }).then( ({url}) => {
    console.log(`Servidor listo en la Alban URL ${url}`);
} )