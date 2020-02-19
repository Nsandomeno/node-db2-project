// imports
const express = require('express')
// database configuration
const db = require('./data/dbConfig.js')
// Router(s)
const carsRouter = require('./api/carsRouter.js')
// Create Server 
const server = express()
// Global Middleware
server.use(express.json())
// Detail of Routes
server.use('/api/cars', carsRouter)
// export to index.js
module.exports = server;