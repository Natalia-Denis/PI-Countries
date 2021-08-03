const { Router } = require('express');
const country =require ('../models/Country')
const tourism = require('../models/Tourism')
const axios = require('axios')


const router = Router();

const api_Info = async() =>{
        const apiUrl= await axios.get('https://restcountries.eu/rest/v2/all');
        const apiInfo= await apiUrl.data.map(el=>{
                return {
                        name : el.name,
                        id: el.alpha3Code,
                        image:el.flag,
                        continent:el.region,
                        capital: el.capital,
                        subregion:el.subregion,
                        area:el.area,
                        poblacion:el.population
        }
  });
     return apiInfo;
}

 const db_Info = async ()=>{
        return await countries.findAll({
                include:{
                        model : tourism,
                        attibutes:['name'],
                        througth:{
                                atributes:[],
                        }
                }
        })       
}

const allcountries= async ()=>{
        const apiInfo= await api_Info();
        const dbInfo = await db_Info();
        const allInfo= apiInfo.concat(dbInfo);
        return allInfo;
}
 
router.get('/',async(req,res)=>{
       const name = req.query.name

        let countries = await allcountries();
        if(name){
        let countriesName= await countries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))      
        countriesName.length?
        res.status(200).send(countriesName):
        res.status(404).send('Pais no encontrado');
        }else {
                res.status(200).send(countries)
        }

})

router.post ('/',(req,res)=>{
        res.send('soy el post de country')
})



module.exports = router;