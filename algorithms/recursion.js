function addNumbers(nums) {
    let total = 0
    for (let num of nums.toString().split('')) {
        total += parseInt(num)
    }
    console.log(total)
}




addNumbers(1234567)


// function addNumbers(nums) {
//     const array = []

//     nums.toString().split('').forEach(num => array.push(parseInt(num)))

//     console.log(array.reduce((a, b) => a + b))
// }