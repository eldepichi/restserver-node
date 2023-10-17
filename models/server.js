const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios'

        // Middewares
        this.middlewares()

        // Rutas de mi aplicación

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuarioPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`)
        });
    }
}

module.exports = Server