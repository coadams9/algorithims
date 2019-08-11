// function addNumbers(nums) {
//     let total = 0
//     for (let num of nums.toString().split('')) {
//         total += parseInt(num)
//     }
//     console.log(total)
// }

// function addNumbers(nums) {

//     if (nums.toString().length > 1) {
//         let numsArray = []
//         numsArray = getNumsArray(nums)
//         let highestNum = numsArray.reduce((highest, next) => highest > next ? highest : next)
//     }
//     console.log(highestNum)

// }

const addNumbers = num => {
    if (num <= 0) {
        return 0
    }

    return num + addNumbers(num - 1)
}






function getNumsArray(nums) {
    let numbers = nums.toString().split('')
    let numbersArray = []

    for (let num of numbers) {
        numbersArray.push(parseInt(num))
    }

    return numbersArray
}


addNumbers(1000000)

// const addNumbers = nums => {
//     let highestNum = null

//     if (nums.length > 1) {
//         highestNum = nums.reduce((highest, next) => highest > next ? highest : next)
//         return highestNum + addNumbers(highestNum - 1)
//     }

//     if (nums <= 0) {
//         return 0
//     }

//     return nums + addNumbers(nums - 1)



// }



// function addNumbers(nums) {
//     const array = []

//     nums.toString().split('').forEach(num => array.push(parseInt(num)))

//     console.log(array.reduce((a, b) => a + b))
// }