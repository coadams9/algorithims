function scope() {
    const x = []
    x.push({ "one": 1, "two": 2, "three": 3 })
    console.log(x)
}

// scope()


function count(arr) {
    let count = 0

    for (var i = 0; i < arr.length; i++) {
        count++
    }

    {
        var i = 3
    }

    console.log(i)


}

count([1, 2, 3, 4, 5, 6, 7, 8])









