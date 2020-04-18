// const name = 'Ivan';
// const userAge = 27;

// const user = {
//     name,
//     age: userAge,
//     location: 'Zhmerinka'
// }

// console.log(user);

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 3
};

// const label = product.label;
// const stock = product.stack;

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
};

transaction('order', 5);
