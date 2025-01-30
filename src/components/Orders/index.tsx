import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders = [
  {
    "_id": "679bc46c34dbd8ab616aca4d",
    "table": "123",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "_id": "677d2cdb9ea406451913de06",
          "name": "Pizza quatro queijos",
          "description": "Deliciosa pizza quatro queijos",
          "imagePath": "1736256731630-quatro-queijos.png",
          "price": 40,
          "ingredients": [
            {
              "name": "Mussarela",
              "icon": "🧀",
              "_id": "677d2cdb9ea406451913de07"
            },
            {
              "name": "Coalho",
              "icon": "🧀",
              "_id": "677d2cdb9ea406451913de08"
            },
            {
              "name": "Parmesão",
              "icon": "🧀",
              "_id": "677d2cdb9ea406451913de09"
            },
            {
              "name": "Brie",
              "icon": "🧀",
              "_id": "677d2cdb9ea406451913de0a"
            }
          ],
          "category": "6723c5826aecb9d48d82676e",
          "__v": 0
        },
        "quantity": 3,
        "_id": "679bc46c34dbd8ab616aca4e"
      },
      {
        "product": {
          "_id": "677d321fcb700621656a0125",
          "name": "Coca cola",
          "description": "Coca cola lata geladinha",
          "imagePath": "1736258079502-coca-cola.png",
          "price": 7,
          "ingredients": [],
          "category": "6723c6bf6aecb9d48d826771",
          "__v": 0
        },
        "quantity": 2,
        "_id": "679bc46c34dbd8ab616aca4f"
      }
    ],
    "createdAt": "2025-01-30T18:26:52.189Z",
    "__v": 0
  }
]

export function Orders() {

  return (
    <Container>
      <OrdersBoard icon='⏱' title='Fila de espera' orders={orders} />
      <OrdersBoard icon='👨‍🍳' title='Em preparação' orders={[]} />
      <OrdersBoard icon='✅' title='Pronto!' orders={[]} />
    </Container>
  )
}
