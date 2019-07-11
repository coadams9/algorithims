s = 'abc'
n = 10

const repeatedString = (s, n) => {
    let nS = ''
    let i = 0
    while (nS.length < n) {
        if (s[i] === undefined) {
            i = 0
        } else {
            nS += s[i]
            i++
        }
    }
    let count = 0
    for (let i = 0; i < nS.length; i++) {
        if (nS[i] === 'a') {
            count++
        }
    }
    console.log(count)
}

repeatedString(s, n)