function maxChar(str) {
    let max = 0
    let maxChar = ''

    let chars = {}
    for (let char of str) {
        (!chars[char]) ? chars[char] = 1 : chars[char]++
    }

    for (let char in chars) {
        if (chars[char] > max) {
            max = chars[char]
            maxChar = char
        }
    }
    return maxChar
}

maxChar('Hello There!')