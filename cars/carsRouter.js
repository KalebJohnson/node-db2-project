const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const carList = await db("cars")

        res.json(carList)

    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await db("cars").where({ id }).first()

        res.json(car)

    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const carData = req.body
        const [id] = await db("cars").insert(carData)
        const newCar = await db("cars").where({ id })


        res.status(201).json(newCar)

    } catch (err) {
        next(err)
    }

})

router.put("/:id", async (req, res, next) => {
	try {
        const input = req.body
        
		if (req.body) {
			await db("cars")
			.update(input)
			.where("id", req.params.id)
        }
        
        const car = await db.first("*")
        .from("cars")
        .where("id", req.params.id)


		res.status(201).json(car)
	} catch (err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	try {
		await db("cars").where("id", req.params.id).del()
		res.status(204).end()
	} catch (err) {
		next(err)
	}
})

module.exports = router