// 1) import json-server library using keyword require. This is library
const jsonServer = require('json-server')

// 2) Create json server using create() method. create() returns an Express server. This is server
const mediaPlayerServer = jsonServer.create()

// 3) Create path for json file(datafile) using method - router()
const router = jsonServer.router("db.json")

// 4) Create middleware to parse json. Middleware has the ability to control request response cycle
const middleware = jsonServer.defaults()
//defaults() method returns middlewares used by JSON Server

// 5) Allows server to use router and middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)
//first use middleware then router 

// 6) Set up port for the server to run
PORT = 3000 || process.env.PORT

// 7) Listen to the request
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Server running successfully at Port number ${PORT}`);
})