function minimumMoves(a, m) {
    const counted = []

    for (let i = 0; i < m.length; i++) {
        const aArr = [a[i]].join().split(''); const mArr = [m[i]].join().split('')

        let count = 0
        for (let j = 0; j < mArr.length; j++) {
            let firstNum = parseInt(aArr[j]); let secNum = parseInt(mArr[j])

            if (firstNum === secNum) {
                null
            }
            while (firstNum < secNum) {
                firstNum++
                count++
            }
            while (firstNum > secNum) {
                firstNum--
                count++
            }
        }
        counted.push(count)
    }

    return counted.reduce((a, b) => a + b)

}

minimumMoves([1244, 4321], [5341, 3614])