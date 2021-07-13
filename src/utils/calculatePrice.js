
export const totalQuantityProduct = (products) => {
    const sum = products.reduce((accumulator, product)=>{
        return accumulator + product.quantity;
    },0);
    return sum;
}

export const sumPriceProduct = (quantity, price) => {
    return quantity * price;
}

export const totalSumPriceProducts = (products) => {
    const sum = products.reduce((accumulator, product)=>{
        return accumulator + sumPriceProduct(product.quantity, product.price);
    },0);
    return sum;
}