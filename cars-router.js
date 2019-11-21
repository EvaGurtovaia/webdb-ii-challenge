const express = require("express");

const Cars = require("./data/carModel.js");

const router = express.Router();

module.exports = router;

router.post("/", async (req, res) => {
    const newCar = req.body;

    if (newCar.VIN && newCar.make && newCar.model && newCar.mileage) {
        try {
            const post = await Cars.insert(req.body);
            res.status(201).json(post);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message:
                    "There was an error while saving the car to the database"
            });
        }
    } else {
        res.status(400).json({
            err: "Please provide VIN, year, model and mileage for the car."
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const cars = await Cars.get();
        res.status(200).json(cars);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "The car information could not be retrieved."
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const car = await Cars.getById(req.params.id);

        if (car) {
            res.status(200).json(car);
        } else {
            res.status(404).json({
                message: "The car with the specified ID does not exist"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "The car information could not be retrieved"
        });
    }
});
