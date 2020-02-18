// import the server
const server = require('./server.js')
// establish dynamic port
PORT = process.env.PORT || 4000
// initiate the server
server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`)
})