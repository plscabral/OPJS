import { Request, Response } from 'express';
import { z } from 'zod';

import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const listProductsByCategoryParams = z.object({
      categoryId: z.string()
    });

    const { categoryId } = listProductsByCategoryParams.parse(req.params);

    const product = await Product.findOne({
      category: categoryId
    });

    res.json(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
