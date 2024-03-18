import { Router } from "express";
import pool from "../database.js";

const router = Router();

router.get('/add', (req,res) =>{
    res.render('Personas/add')
})

router.post('/add', async(req, res) =>{
    try{
        const Disponibilidad = 1;
        const {Platillo, Precio, Submenu} = req.body;
        const newPlatillo = {Platillo, Precio, Submenu, Disponibilidad}
        await pool.query('insert into Minuta SET ?', [newPlatillo]);
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/list', async(req, res) =>{
    try{
        const [result] = await pool.query('select * from Minuta');
        res.render('personas/list', {heidis: result});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

export default router;
