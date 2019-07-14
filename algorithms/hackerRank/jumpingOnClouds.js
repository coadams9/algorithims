
c = [0, 0, 0, 0, 1, 0]

jumpingOnClouds = (c) => {
    c.sort()
    let count = 0
    for (i = 1; i < c.length; i++) {
        if (c[i + 1] === 0) {
            count++
            i += 1
        } else if (c[i] === 0) {
            count++
        }
    }
    console.log(count)
    return count
}

jumpingOnClouds(c)