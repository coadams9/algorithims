function countingValleys(n, s) {
    let alt = 0; let valleyCount = 0
    for (i = 0; i < n; i++)
        if (s[i] === 'U') {
            alt++
            if (alt === 0) {
                valleyCount++
            }
        } else {
            alt--
        }
    console.log(valleyCount)
    return valleyCount
}

s = 'UDDDUDUU'
n = 8


countingValleys(n, s)