function calculateDiscountedPrice (prite, discounPercentage) {
    const dicount = (price * discounPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discounPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discounPercentage)

console.log('originalPrice: $' + originalprice)
console.log('Discount:  ' + discounPercentage + '%')
console.log('Price with discount: $' + finalPrice)