function primeNumber(number: number): boolean {
    let tempPrima = 0

    for (let i: number = 1; i <= number; i++) {
        if (number % i == 0) {
            tempPrima++
        }
    }
    if (tempPrima == 2) {
        return true
    } else {
        return false
    }
}

console.log(primeNumber(11))
console.log(primeNumber(13))
console.log(primeNumber(17))
console.log(primeNumber(20))
console.log(primeNumber(35))

