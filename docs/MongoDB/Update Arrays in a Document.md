---
layout: default
title: Update Arrays in a Document
parent: MongoDB
---

# Document 내 Array를 업데이트 할 때

---

- [First array element match positional operator](https://docs.mongodb.com/drivers/node/fundamentals/crud/write-operations/embedded-arrays/#std-label-first-match-operator): `$`
- [All array element match operator](https://docs.mongodb.com/drivers/node/fundamentals/crud/write-operations/embedded-arrays/#std-label-all-match-operator): `$[]`
- [Filtered positional operator](https://docs.mongodb.com/drivers/node/fundamentals/crud/write-operations/embedded-arrays/#std-label-filtered-positional-operator): `$[<identifier>]`

## 특정 Array 를 업데이트 하고 싶을 때

C# 코드에서 아래와 같이 array Filters 오브젝트를 생성하고

```
arrayFilters: [
  { orderItem.type: "pizza" },
  { orderItem.size: "large" }
]
```

해당 필터를 업데이트 시 옵션으로 적용해주면 된다.

```
    const query = { name: "Steve Lobsters" };
    const updateDocument = {
      $push: { "items.$[orderItem].toppings": "garlic" }
    };
    const options = {
      arrayFilters: [{
        "orderItem.type": "pizza",
        "orderItem.size": "large",
      }]
    };

    const result = await pizza.updateMany(query, updateDocument, options);
```



## 참고자료 

[Update Arrays in a Document — Node.js (mongodb.com)](https://docs.mongodb.com/drivers/node/fundamentals/crud/write-operations/embedded-arrays/)

---

