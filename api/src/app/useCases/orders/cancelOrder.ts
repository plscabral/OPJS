import { Request, Response } from 'express';
import { z } from 'zod';

import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {
  try {
    const cancelOrderParams = z.object({
      orderId: z.string()
    });

    const { orderId } = cancelOrderParams.parse(req.params);

    await Order.findByIdAndDelete(orderId)

    res.sendStatus(204)
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
