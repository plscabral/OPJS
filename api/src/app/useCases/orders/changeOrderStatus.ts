import { Request, Response } from 'express';
import { z } from 'zod';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const changeOrderStatusParams = z.object({
      orderId: z.string()
    });

    const { orderId } = changeOrderStatusParams.parse(req.params);

    const enumStatus = ['WAITING', 'IN_PRODUCTION', 'DONE'] as const;

    const changeOrderStatusBody = z.object({
      status: z.enum(enumStatus)
    });

    const { status } = changeOrderStatusBody.parse(req.body);
    
    await Order.findByIdAndUpdate(orderId, { status })

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
}
