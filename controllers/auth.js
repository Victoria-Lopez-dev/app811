
//const espress = require('espress');
const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');


const crearUsuario = async (req, res = response) => {

    const { name, email, password } = req.body;
    console.log(req.body);

    try {
        const usuario = await Usuario.findOne({ email });
        //let usurio = await Usuario.findOne({ email });
        console.log(usuario);

        if(usuario){
            return res.status(400).json({
                ok: false,
                message: 'El Usuario ya Existe',    
            })
        }else{
            const usuario1 = new Usuario(req.body);
            //usuario = new Usuario(req.body)
            usuario1.save();
            //await usuario.save();
        }

        res.status(200).json({
            message: 'Creamos el Usuario con los siguientes datos: ', 
            user: req.body, 
            name, email, password  
        });

    } catch (error) {
        res.status(500).json({
            message: 'Llamar al Administrador de la Aplicación',    
        })
    }

    
};

const renovarToken = (req, res = response) => {
    res.status(400).json({
        message: 'Te renovamos tu Token para la API del Calendario',    
    })
};

module.exports = {
    crearUsuario,
    renovarToken,
};