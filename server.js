const express = require("express")

const server = express()

server.all("/", (req, res) => {
    res.send(`Moin! Dieser Server ist exlusiv für den KochBot!`)
})

function keepalive() {
    server.listen(3000, () => {
        console.log("Server is ready.")
    })
}

module.exports = keepalive