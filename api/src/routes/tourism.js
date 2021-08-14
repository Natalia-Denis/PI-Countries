const { Router } = require("express");
const { Country, Tourism, country_tourism } = require("../db");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  const activity = await Tourism.findAll({
    include : Country
  });
  res.json(activity);
});



router.post("/", async (req, res) => {
        try {
        const { name, dificultad, duracion, temporada, idC } = req.body;
       let [create, hola] = await Tourism.findOrCreate({
               where: {name},
              defaults : {
                name,
                dificultad,
                duracion,
                temporada
              }});
          create.setCountries(idC)   
         res.send(create);
        
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
