# 실비아 pre-education

## 주제

- 간단한 이커머스 사이트를 만들었습니다.

## 주요 기능

- 상품 생성, 조회, 수정 및 삭제
- 유저 생성 및 입금
- 주문 생성 및 조회

## 주문 생성 Query 예시

### 요청

```graphQL
mutation CreateOrder {
    createOrder(
        userId: 1
        createOrderInput: { items: [{ productId: 3, quantity: 1 }, { productId: 4, quantity: 2 }] }
    ) {
        orderId
        user {
            userId
            name
            amount
        }
        orderItems {
            product {
                productId
                name
                price
                quantity
            }
            quantity
        }
    }
}
```

### 응답

```json
{
  "data": {
    "createOrder": {
      "orderId": 9,
      "user": {
        "userId": 1,
        "name": "전유진",
        "amount": 44000
      },
      "orderItems": [
        {
          "product": {
            "productId": 1,
            "name": "진공 청소기",
            "price": 9000,
            "quantity": 1
          },
          "quantity": 2
        },
        {
          "product": {
            "productId": 2,
            "name": "폼롤런",
            "price": 9000,
            "quantity": 2
          },
          "quantity": 1
        }
      ]
    }
  }
}
```
