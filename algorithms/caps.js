function capitalize(str) {
    let arr = str.split(' ')
    let capitalized = []
    for (let word of arr) {
        capitalized.push(word[0].toUpperCase() + word.slice(1))
    }
    return capitalized.join(' ')
}
