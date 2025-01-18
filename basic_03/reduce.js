const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const course = shoppingCart.reduce((acc,currVal) => acc + currVal.price ,0)
console.log(`Your Total bill of your purchase is: ${course} pkrs`);
