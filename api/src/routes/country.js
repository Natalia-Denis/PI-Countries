const { Router } = require("express");
const { Country, Tourism, country_tourism } = require("../db");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  const countries = await Country.findAll({
    include : Tourism
  });
   if (name) {
    let countriesName = await countries.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    countriesName.length
      ? res.status(200).send(countriesName)
      : res.status(404).send("Pais no encontrado");
  } else {
    res.status(200).send(countries);
  }
});

router.get("/:idPais", async (req, res) => {
  const {idPais} = req.params;
  if (!idPais) {
    return res.send("No hay id");
  }
  
  if (typeof idPais === "string" && idPais.length === 3) {
   let countryId = await Country.findAll({
    include : Tourism
  });
   let countriesId = await countryId.filter((el) =>
      el.id.toLowerCase().includes(idPais.toLowerCase())
    );
    countriesId.length
      ? res.status(200).send(countriesId)
      : res.status(404).send("Pais no encontrado");
 
} else res.send ('mal id')
});

module.exports = router;
