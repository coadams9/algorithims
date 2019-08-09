const schedule = []

const investment = (s, e) => {
    const times = []
    const n = s.length

    for (let i = 0; i < n; i++) {
        times.push(s[i], e[i])
    }

    let i = 0
    const tLength = times.length

    while (i < tLength) {
        let startDay = times[i]; let endDay = times[i + 1]

        while (startDay <= endDay) {

            if (!inSchedule(startDay)) {
                schedule.push(startDay)
                i++
                break
            } else if (!inSchedule(endDay)) {
                schedule.push(endDay)
                i++
                break
            } else {
                startDay++
                endDay--
            }
        }

        i++
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

investment([1, 1, 2, 1], [2, 2, 4, 1])



// hits(counts)



// ------------------------------------------------------------------------------





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


// let counts = [
//     "900,google.com",
//     "60,mail.yahoo.com",
//     "10,mobile.sports.yahoo.com",
//     "40,sports.yahoo.com",
//     "300,yahoo.com",
//     "10,stackoverflow.com",
//     "20,overflow.com",
//     "2,en.wikipedia.org",
//     "1,m.wikipedia.org",
//     "1,mobile.sports",
//     "1,google.co.uk"
// ]

// const hits = arr => {
//     const counts = {}
//     const n = arr.length

//     for (let i = 0; i < n; i++) {
//         const newArr = arr[i].split(',')
//         const currentHits = parseInt(newArr[0])
//         const domain = newArr[1];


//         let domainParts = domain.split('.');
//         console.log(domainParts)

//         while (domainParts.length > 0) {
//             const currentDomain = domainParts.join('.');
//             if (!(currentDomain in counts)) {
//                 counts[currentDomain] = 0;
//             }
//             counts[currentDomain] += currentHits;
//             domainParts.shift();
//         }
//     }

//     return counts;
// }
