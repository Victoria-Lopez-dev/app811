
/* 
    Responde a la ruta:
    /api/auth/
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
    crearUsuario,
    renovarToken,
} = require('../controllers/auth')



router.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a nuestra API del Calendario',    
    })
});

router.post('/new', 
            [
                check('name', 'El nombre es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password debe tener como mínimo 8 caracteres').isLength({ min: 8 }),
                validarCampos,
            ],
            crearUsuario);


router.post('/renew', renovarToken );


module.exports = router;