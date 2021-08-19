import { Request, response, Response } from "express";
import CreateProductService from "../services/CreateProductService";

export default class ProductController {
    public async create(request: Request, response: Response): Promise<Response> {
        let {name, price, quantity} = request.body;
        let createProduct = new CreateProductService();
        let newProduct = await createProduct.execute({
            name, price, quantity
        })

        return response.json(newProduct);
    }
}