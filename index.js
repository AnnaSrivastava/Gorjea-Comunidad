const { GraphQLServer } = require('graphql-yoga');
const messages = [];
const typeDefs = `
	type Message {
		id: ID!
		user: String!
		content: String!
	}
	type Query {
		messages: [Message!]
	}
	type Mutation {
		postMessage(user: String!, content: String!): ID!
	}
`;
const resolvers = {
	Query: {
		messages: () => messages,
	},
	Mutation: {
		postMessage: (parent, {user, content}) => {
			const id = messages.length;
			messages.push({
				id,
				user,
				content
			});
			return id;
		}
	}
};
const server = new GraphQLServer({typeDefs, resolvers});
server.start(({port})=>{ console.log(`${port} Hmm`); });

// var express = require('express');
// var socket = require('socket.io');

// var app = express();
// var server = app.liste n(3001, function(){
// 	console.log("listening at port 3001");
// })

// app.use(express.static('public'));

// var io = socket(server);
// io.on('connection', function(socket){
// 	console.log('made socket connection', socket.id);
// 	socket.on('chat', function(data){
// 		io.sockets.emit('chat', data);
// 	});
// 	socket.on('typing', function (data) {
// 		socket.broadcast.emit('typing', data);
// 	})
// });