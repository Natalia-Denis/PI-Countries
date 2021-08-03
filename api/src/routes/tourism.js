const { Router } = require('express');
const axios = require('axios')


const router = Router();

router.get('/',(req,res)=>{
        res.send('Soy el get de tourism')
})

router.post ('/',(req,res)=>{
        res.send('soy el post de tourism')
})



module.exports = router;