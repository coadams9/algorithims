ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]


const sockMerchant = (n, ar) => {
    let sorted = ar.sort()
    let sockPairs = 0

    for (let i = 0; i < n - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            sockPairs++
            i++
        }
    }
    return sockPairs
}


sockMerchant(9, ar)