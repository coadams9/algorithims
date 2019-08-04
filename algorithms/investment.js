const investment = (s, e, n = s.length, n1 = e.length, times = []) => {
    schedule = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n1; j++) {
            times.push([s[i], e[j]])
            i++
        }
    }

    let arrI = 0

    while (arrI < times.length) {
        const currTimes = times[arrI]
        let startDay = currTimes[0]; let endDay = currTimes[1]

        while (startDay <= endDay) {

            if (inSchedule(startDay)) {
                startDay++
            } else {
                schedule.push(startDay)
                break
            }
        }

        arrI++
    }

    return schedule.length
}

const inSchedule = day => {
    if (schedule.includes(day)) {
        return true
    } else {
        return false
    }
}





investment([32, 32, 32], [35, 1100, 1100])

// const allTimes = []

//     allTimes.push(...s, ...e)

//     const times = new Set(allTimes)
//     const schedule = [...times]
//     return schedule.length



//     const times = []

//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < e.length; j++) {
//             times.push([s[i], e[j]])
//             i++
//         }
//     }

//     const schedule = []

//     let arrI = 0

//     while (arrI < times.length) {
//         const currTimes = times[arrI]

//         if (schedule.includes(currTimes[0]) && schedule.includes(currTimes[1])) {
//             null
//         } else if (!schedule.includes(currTimes[0])) {
//             schedule.push(currTimes[0])
//         } else {
//             schedule.push(currTimes[1])
//         }

//         arrI++
//     }

//     let count = 0
//     schedule.forEach(num => count++)
//     return count