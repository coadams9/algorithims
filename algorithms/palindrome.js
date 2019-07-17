function palindrome(str) {
    let reversed = str.split('').reduce((rev, char) => char + rev, '')
    return reversed === str
}

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

palindrome('ajbjcjd')
