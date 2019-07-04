// // console.log(1)
// // console.log(2)
// // console.log(3)
// // console.log(4)
// // console.log(5)
// // console.log(6)
// // console.log(7)
// // console.log(8)
// // console.log(9)
// // console.log(10)
// // console.log(11)

// arr = [1, 2, 3, 4, 5, 6]


// for (let i = 1; i <= 100; i++) {
//     let count = 0
//     count += 1
//     console.log(count)
// }

// // let i = 1

// // while (i <= 100) {
// //     console.log(i)
// //     i++
// // }

// // if (2 > 3) {
// //     console.log('2 is greater than 3')
// // } else {
// //     console.log('2 is not greater than 3')
// // }

// for(i = 0; i < arr.length; i++){
//     for(j = 0; j < arr.length; i++){

//     }
// }

var word = 'cat'

function lastLetters(word) {
    var newString = ''
    let length = word.length
    let lastLett = word[length - 1]
    let secLLett = word[length - 2]
    newString = lastLett + " " + secLLett
    console.log(newString)
}

// lastLetters(word)


input = [
    'hello there billy',
    'see spot run',
    'jake goes hunting',
    'billy likes pizza',
    'run spot walk',
    'hunting is boring',
    'pizza with cheese'
]

function generate_phrases(phrases) {
    let newArr = []
    let newPhrase = ''
    for (i = 0; i < phrases.length; i++) {
        testPhrase = phrases[i].split(' ')
        testWord = testPhrase[testPhrase.length - 1]
        for (j = 0; j < phrases.length; j++) {
            testPhrase2 = phrases[j].split(' ')
            testWord2 = testPhrase2[0]
            if (testWord === testWord2) {
                testPhrase.pop()
                testPhrase.push(' ')
                newPhrase = testPhrase + testPhrase2
                newPhrase = newPhrase.split(',').join(' ')
                newArr.push(newPhrase)
            }
        }
    }
    console.log(newArr)
    return newArr
}

generate_phrases(input)