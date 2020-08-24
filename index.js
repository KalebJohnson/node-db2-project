const express = require("express")
const helmet = require("helmet")
const carsRouter = require("./cars/carsRouter")
const welcomeRouter = require("./welcome/welcome")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.use("/cars", carsRouter)
server.use("/", welcomeRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Oops",
	})
})

server.listen(port, () => {
	console.log(`Running on ${port}`)
})