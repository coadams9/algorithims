
clouds = [0, 1, 0, 0, 1, 0]

jumpingOnClouds = (clouds) => {
    let count = 0
    for (i = 0; i < clouds.length; i++) {
        if (clouds[i + 2] === 0) {
            count++
            i += 1
        } else if (clouds[i + 1] === 0) {
            count++
        } else {
            return count
        }
    }
    return count
}

jumpingOnClouds(clouds)