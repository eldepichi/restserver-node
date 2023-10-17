const { Router } = require('express');
const { usuarioGet,
    usuarioDelete,
    usuarioPatch,
    usuarioPost,
    usuarioPut
} = require('../controllers/user');

const router = Router();

router.get('/', usuarioGet);

router.put('/:id', usuarioPut);

router.post('/', usuarioPost);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPatch);


module.exports = router;