const express = require('express');
const router = express.Router();

const Libro = require('../models/Libro');

//Ruta para obtener todos los libros 
router.get("/", async(req,res) => {
    try {
        const libros = await Libro.find();
        res.status(200).json({libros});
    } catch (error) {
        console.error('err', error);
        res.status(500).json({ error: 'Erroe al obtener libros' });
    }
});

//Ruta para crear todos los libros 

router.post("/",async (req,res) => {
    try{
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro);
    } catch(error){
        res.status(500).json({error:"Error al crear el Libro"});
    }
});

//Ruta para actualizar un libro existente

router.put("/:id",async (req,res) => {
    try{
      console.log(req.params.id);
      console.log(req.body);
      const libro = await Libro.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{upsert:true})
      res.status(200).json(libro)
    } catch(error){
        res.status(500).json({error:"Error al actualizar el Libro"});
    }
});

// //Ruta para eliminar un libro 
router.delete("/:id",async (req,res) => {
    try {   
        await Libro.findByIdAndDelete(req.params.id); 
        res.json({Message:'Libro eliminado correctamente'});
    } catch (error) {
        res.status(500).json({ error:'Error al eliminar el Libro'});
    }
});

module.exports = router;













