s = 'abc'
n = 15

const repeatedString = (s, n) => {

    let i = 0
    let arr = []

    while (arr.length < n) {
        arr.push(s[i])
        i++
        if (s[i] === undefined) {
            i = 0
        }
    }

    const a = arr.filter(char => {
        return char === 'a'
    })

    return a.length

}

repeatedString(s, n)