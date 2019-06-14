export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const productsAPI =
//   'https://react-shopping-cart-67954.firebaseio.com/products.json';
// // export const productsAPI = "http://localhost:8001/api/products";

{
  "products": [
    {
      "id": 12,
      "q": 1 ,
      "sku": "apple",
      "title": "Apple",
      "description": "4 MSL",
      "availableSizes": ["S", "XS"],
      "style": "Black with custom print",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 13,
      "q": 1 ,
      "sku": "orange",
      "title": "Orange",
      "description": "",
      "availableSizes": ["M"],
      "style": "Front print and paisley print",
      "price": 29.45,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 14,
      "q": 1 ,
      "sku": "mango",
      "title": "Mango",
      "description": "GPX Poly 1",
      "availableSizes": ["X", "L", "XL"],
      "style": "Front tie dye print",
      "price": 9.0,
      "installments": 3,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 15,
      "q": 1 ,
      "sku": "apricot",
      "title": "Apricot",
      "description": "Treino 2014",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "style": "Black T-Shirt with front print",
      "price": 14.0,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 11,
      "q": 1 ,
      "sku": "avocado",
      "title": "Avocado",
      "description": "",
      "availableSizes": ["X", "L"],
      "style": "Wine",
      "price": 13.25,
      "installments": 3,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 16,
      "sku": "banana",
      "title": "Banana",
      "description": "",
      "availableSizes": ["XS", "X", "L", "ML", "XL"],
      "style": "Grey",
      "price": 75.0,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 0,
      "q": 1 ,
      "sku": "blueberry",
      "title": "Blueberry",
      "description": "14/15 s/nº",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "style": "Branco com listras pretas",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 1,
      "sku": "cherry",
      "title": "Cherry",
      "description": "14/15 s/nº",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "style": "Preta com listras brancas",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 2,
      "q": 1 ,
      "sku": "coconut",
      "title": "Coconut",
      "description": "14/15 s/nº",
      "availableSizes": ["X", "L"],
      "style": "Branco com listras pretas",
      "price": 14.9,
      "installments": 7,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 3,
      "sku": "melon",
      "title": "Melon",
      "description": "2014 s/nº",
      "availableSizes": ["X", "L"],
      "style": "Preto com listras brancas",
      "price": 14.9,
      "installments": 7,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 4,
      "q": 1 ,
      "sku": "peach",
      "title": "Peach",
      "description": "14/15 s/nº - Jogador",
      "availableSizes": ["XL"],
      "style": "Branco com listras pretas",
      "price": 25.9,
      "installments": 12,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
    },

    {
      "id": 5,
      "sku": "pear",
      "title": "Pear",
      "description": "14/15 + Camiseta 1º Mundial",
      "availableSizes": ["X", "L", "XL"],
      "style": "Preto",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
    },

    {
      "id": 6,
      "q": 1 ,
      "sku": "pineaple",
      "title": "Pineaple",
      "description": "Goleiro 13/14",
      "availableSizes": ["XL", "XXL"],
      "style": "Branco",
      "price": 49.9,
      "installments": 0,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 7,
      "q": 1 ,
      "sku": "plum",
      "title": "Plum",
      "description": "1977 Infantil",
      "availableSizes": ["S"],
      "style": "Preto com listras brancas",
      "price": 22.5,
      "installments": 4,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 8,
      "q": 1 ,
      "sku": "Pomegranate",
      "title": "Pomegranate",
      "description": "",
      "availableSizes": ["XL"],
      "style": "Azul escuro",
      "price": 18.7,
      "installments": 4,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": false
    },

    {
      "id": 9,
      "q": 1 ,
      "sku": "strewberry",
      "title": "Strewberry",
      "description": "",
      "availableSizes": ["L", "XL"],
      "style": "",
      "price": 134.9,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 10,
      "q": 1 ,
      "sku": "watermelon",
      "title": "Watermelon",
      "description": "",
      "availableSizes": ["L", "XL"],
      "style": "",
      "price": 49.0,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    }
  ]
}



// { 
//   "products": 
//   [
//     { 
//       "availableSizes": ["S", "XS"], 
//       "currencyFormat": "$", 
//       "currencyId": "USD", 
//       "description": "4 MSL",
//       "id": 12, "installments": 9,
//       "isFreeShipping": true,
//       "price": 10.9, 
//       "sku": 12064273040195392, "style": "Black with custom print", "title": "Cat Tee Black T-Shirt" 
//     }, 
//     { "availableSizes": ["M"], "currencyFormat": "$", "currencyId": "USD", "description": "", "id": 13, "installments": 5, 
//     "isFreeShipping": true, "price": 29.45, "sku": 51498472915966370, "style": "Front print and paisley print", 
//     "title": "Dark Thug Blue-Navy T-Shirt" }, { "availableSizes": ["X", "L", "XL"], "currencyFormat": "$", "currencyId": "USD", 
//     "description": "GPX Poly 1", "id": 14, "installments": 3, "isFreeShipping": true, "price": 9, "sku": 10686354557628304, 
//     "style": "Front tie dye print", "title": "Sphynx Tie Dye Wine T-Shirt" 
//   },
//    { "availableSizes": ["X", "L", "XL", "XXL"], 
//     "currencyFormat": "$", "currencyId": "USD", "description": "Treino 2014", "id": 15, "installments": 5, "isFreeShipping": true, 
//     "price": 14, "sku": 11033926921508488, "style": "Black T-Shirt with front print", "title": "Skuul" }, { "availableSizes": ["X", "L"], 
//     "currencyFormat": "$", "currencyId": "USD", "description": "", "id": 11, "installments": 3, "isFreeShipping": true, "price": 13.25, 
//     "sku": 39876704341265610, "style": "Wine", "title": "Wine Skul T-Shirt" }, { "availableSizes": ["X", "L", "XL", "XXL"], "currencyFormat": "$", "currencyId": "USD", "description": "14/15 s/nº", "id": 0, "installments": 9, "isFreeShipping": true, "price": 10.9, "sku": 8552515751438644, "style": "Branco com listras pretas", "title": "Cat Tee Black T-Shirt" }, { "availableSizes": ["X", "L", "XL", "XXL"], "currencyFormat": "$", "currencyId": "USD", "description": "14/15 s/nº", "id": 1, "installments": 9, "isFreeShipping": true, "price": 10.9, "sku": 18644119330491310, "style": "Preta com listras brancas", "title": "Sphynx Tie Dye Grey T-Shirt" }, { "availableSizes": ["X", "L"], "currencyFormat": "$", "currencyId": "USD", "description": "14/15 s/nº", "id": 2, "installments": 7, "isFreeShipping": true, "price": 14.9, "sku": 11854078013954528, "style": "Branco com listras pretas", "title": "Danger Knife Grey" }, { "availableSizes": ["X", "L"], "currencyFormat": "$", "currencyId": "USD", "description": "2014 s/nº", "id": 3, "installments": 7, "isFreeShipping": true, "price": 14.9, "sku": 876661122392077, "style": "Preto com listras brancas", "title": "White DGK Script Tee" }, { "availableSizes": ["XL"], "currencyFormat": "$", "currencyId": "USD", "description": "14/15 s/nº - Jogador", "id": 4, "installments": 12, "isFreeShipping": false, "price": 25.9, "sku": 9197907543445676, "style": "Branco com listras pretas", "title": "Born On The Streets" }, { "availableSizes": ["X", "L", "XL"], "currencyFormat": "$", "currencyId": "USD", "description": "14/15 + Camiseta 1º Mundial", "id": 5, "installments": 9, "isFreeShipping": false, "price": 10.9, "sku": 10547961582846888, "style": "Preto", "title": "Tso 3D Short Sleeve T-Shirt A" }, { "availableSizes": ["XL", "XXL"], "currencyFormat": "$", "currencyId": "USD", "description": "Goleiro 13/14", "id": 6, "installments": 0, "isFreeShipping": true, "price": 49.9, "sku": 6090484789343891, "style": "Branco", "title": "Man Tie Dye Cinza Grey T-Shirt" }, { "availableSizes": ["S"], "currencyFormat": "$", "currencyId": "USD", "description": "1977 Infantil", "id": 7, "installments": 4, "isFreeShipping": true, "price": 22.5, "sku": 18532669286405344, "style": "Preto com listras brancas", "title": "Crazy Monkey Black T-Shirt" }, { "availableSizes": ["XL"], "currencyFormat": "$", "currencyId": "USD", "description": "", "id": 8, "installments": 4, "isFreeShipping": false, "price": 18.7, "sku": 5619496040738316, "style": "Azul escuro", "title": "Tso 3D Black T-Shirt" }, { "availableSizes": ["L", "XL"], "currencyFormat": "$", "currencyId": "USD", "description": "", "id": 9, "installments": 5, "isFreeShipping": true, "price": 134.9, "sku": 11600983276356164, "style": "", "title": "Crazy Monkey Grey" }, { "availableSizes": ["L", "XL"], "currencyFormat": "$", "currencyId": "USD", "description": "", "id": 10, "installments": 9, "isFreeShipping": true, "price": 49, "sku": 27250082398145996, "style": "", "title": "On The Streets Black T-Shirt" }


// ] }