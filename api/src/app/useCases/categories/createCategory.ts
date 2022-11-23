import { Request, Response } from 'express';
import { z } from 'zod';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const createCategoryBody = z.object({
      icon: z.string(),
      name: z.string()
    });

    const { icon, name } = createCategoryBody.parse(req.body);

    await Category.create({ icon, name });

    res.sendStatus(201);
  } 
  catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
}
