import { Request, Response } from 'express';
import { z } from 'zod';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;

    const createProductBody = z.object({
      name: z.string(),
      description: z.string(),
      price: z.string(),
      ingredients: z.any(),
      category: z.string()
    });

    const {
      name,
      description,
      price,
      ingredients,
      category
    } = createProductBody.parse(req.body);

    await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category
    });

    res.sendStatus(201);
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
