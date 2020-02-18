// imports
const express = require('express')
// database configuration

// Router(s)

// Create Server 
const server = express()
// Global Middleware
server.use(express.json())
// Detail of Routes

// export to index.js
module.exports = server;