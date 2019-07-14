let arr = [7, 2, 9, -3, -5]


var getCloser = (arr) => {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        let count = 0
        if (arr[i] < 0) {
            let counter = arr[i]
            while (counter <= 0) {
                count++
                counter++
            }
        } else {
            let counter = arr[i]
            while (counter >= 0) {
                count++
                counter--
            }
        }
        newArr.push(count.toString() + ' ' + arr[i])
    }
    console.log(newArr.sort())
}

getCloser(arr)



