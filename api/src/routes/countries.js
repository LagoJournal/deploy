const {Country, Activity} = require ('../db')
const countries = require('../controllers/countries');
const { Router } = require('express');

const router = Router();

router.get('/:id', async (req,res)=>{
    await countries.dbcontrol();
    const {id} = req.params;
    const country = await Country.findByPk(id,{
        include:{model: Activity, through: {attributes:[]}}
    });
    country.length !== 0? res.status(200).send(country) : res.status(400).send('Invalid Code')

});

router.get('/', async (req,res)=>{
    let {name} = req.query;
    await countries.dbcontrol();
    try{
        const response = await countries.countryFinder(name);
        return res.status(200).send(response);
    }catch (error){
        return res.status(400).send(error.message);
    }
})

module.exports = router;