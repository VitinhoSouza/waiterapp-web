import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "679bc46c34dbd8ab616aca4d",
    table: "123",
    status: "DONE",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1736256731630-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "679bc46c34dbd8ab616aca4e",
      },
      {
        product: {
          name: "Coca cola",
          imagePath: "1736258079502-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "679bc46c34dbd8ab616aca4f",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="⏱" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
