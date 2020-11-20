/* eslint-disable no-console */
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8080, () => {
	console.log("JSON Server is running : http://localhost:8080");
});
