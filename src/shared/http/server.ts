// importa dependência do express
import express from 'express';

// cria um servidor express
let servidor = express();

import routes from './routes/routes';

// associa as rotas ao servidor 
servidor.use(routes)

import './../typeorm/index'

// sobe o servidor, que fica escutando e aguardando as requisições
servidor.listen(3333, () => {

    console.log(`Server up and running`)
    
})