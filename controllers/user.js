const { response, request } = require("express")

const usuarioGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        ok: true,
        msg: "get API - controllers",
        query
    })
}

const usuarioPost = (req = request, res = response) => {
    const body = req.body;
    res.json({
        ok: true,
        msg: "post API - controllers",
        body
    })
}

const usuarioPut = (req = request, res = response) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: "put API - controllers",
        id
    })
}

const usuarioPatch = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "patch API - controllers"
    })
}

const usuarioDelete = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "delete API - controllers"
    })
}



module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete,
    usuarioPatch
}