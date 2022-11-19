import { Order } from "../@types/Order";

export const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668741927833-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6376fb27cbde3323e63b4f89'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668742780487-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6376fe7ca62efe125cca9d52'
      }
    ],
  }
];
