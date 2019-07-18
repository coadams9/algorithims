function chunk(array, size) {
    let chunked = []
    let i = 0

    while (i < array.length) {
        let chunk = array.slice(i, i + size)
        chunked.push(chunk)
        i += size
    }
    return chunked
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
