var express = require('express');
var router = express.Router();

/* Homepage - GET - Retourne la liste des voyages correspondants aux critères de saisie. 
3 critères passés en BODY dans la requête : departure / arrival / date */
//Retourne erreur si rien ne correspond en affichant le logo de la loupe sur le front
//!Attention à la gestion des dates
router.get('/', function(req, res) {
  
    
});

module.exports = router;