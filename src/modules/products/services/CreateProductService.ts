import { CreateDateColumn, getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductRepoository";

interface IRequest {
    name: string,
    price: number,
    quantity: number
}

class CreateProductService {

    public async execute({name, price, quantity} : IRequest): Promise<Product> {
        let productRepository =getCustomRepository(ProductRepository);
        
        let productExist = await productRepository.findByName(name);
        if (productExist) {
            console.log(`Produto ja existe no banco`)
        }
        let newProduct = productRepository.create({
            name,
            price,
            quantity
        })

        await productRepository.save(newProduct);

        return newProduct;
    }
}

export default CreateProductService;