var express = require('express');
var router = express.Router();

const Trip = require("../models/trips");

/* Homepage - GET - Retourne la liste des voyages correspondants aux critères de saisie. 
3 critères passés en BODY dans la requête : departure / arrival / date */
//Retourne erreur si rien ne correspond en affichant le logo de la loupe sur le front
//!Attention à la gestion des dates - format ISO8601

router.get('/', function(req, res) {

    let startDate = new Date(req.query.date)
    let endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 1)

    const filter = {
        departure: { $regex: new RegExp(`^${req.query.departure}$`, 'i') },
        arrival: { $regex: new RegExp(`^${req.query.arrival}$`, 'i') },
        date: { $gt: new Date(req.query.date), $lt : new Date(endDate)} // + "T00:00:00.000Z"
    }
    Trip.find(filter)
    .then(result => 
        {
            if (result.length > 0) 
                {
                    res.json(
                        {
                            status : 200, 
                            result: result,
                        })
                }
            else res.json({status: 400, result: false, error: "Trip not found" })
        }
        )

});

module.exports = router;