// importa classe Router da experiencia express
import {response, Router} from 'express'

// cria um objeto da classe Router

let routes = Router()

// rota GET padrão /
routes.get('/', (request, response) =>{
    return response.json({
        message: 'Funcionou meu primeiro exemplo'
    })
})

// exportar o objeto para uso em outro arquivo 
export default routes;