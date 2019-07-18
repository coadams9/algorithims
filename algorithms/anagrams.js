function anagrams(stringA, stringB) {
    if (stringA.length !== stringB.length) {
        return false
    }
    const a = stringA.split('').sort().join('')
    const b = stringB.split('').sort().join('')
    return a === b
}

//ALSO//

function anagrams(stringA, stringB) {
    const a = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    const b = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    console.log(a)
    console.log(b)
    return a === b
}

function anagrams(stringA, stringB) {
    let aO = {}
    let bO = {}
    const a = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort()
    const b = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort()
    for (let char of a) {
        if (!aO[char]) {
            aO[char] = 1
        } else {
            aO[char]++
        }
    }
    for (let char of b) {
        if (!bO[char]) {
            bO[char] = 1
        } else {
            bO[char]++
        }
    }
    if (Object.keys(aO).length !== Object.keys(bO).length) {
        return false
    }
    for (let char in aO) {
        if (aO[char] !== bO[char]) {
            return false
        }
    }
    return true
}




anagrams('abc dce', 'cde bac')
