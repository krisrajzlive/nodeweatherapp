//Object property shorthand

const name ='Raj'
const userAge = 25

const user = {
    name, //shorthand syntax
    age: userAge,
    location: 'St Louis'
}

console.log(user)

//Object destructuring
const product = {
    label: 'Red Notebook',
    price: 12.5,
    stock: 147,
    salePrice: undefined,
    rating: 4.2
}

//const label = product.label
//const stock = product.stock

const {label:productLabel, stock, rating = 5} = product
console.log(productLabel, stock, rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('Order', product)