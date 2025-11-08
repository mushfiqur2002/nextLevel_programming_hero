let array = [23, 5, 6, 70, 12, 8, 1, 62]

function binnarySearch(arr, given) {
    let left = 0;
    let right = arr.length - 1
    let sortedArr = arr.sort((a, b) => (b - a))
    let asecndingOrder = sortedArr[0] < sortedArr[sortedArr.length - 1]

    console.log(sortedArr)

    while (right >= left) {
        let mid = Math.floor((left + right) / 2)

        if (asecndingOrder) {
            if (sortedArr[mid] === given) {
                return console.log('yes got it in ascending order:', sortedArr[mid]);
            } else if (sortedArr[mid] > given) {
                right = mid - 1
            } else if (sortedArr[mid] < given) {
                left = mid + 1
            }
        } else {
            if (sortedArr[mid] === given) {
                return console.log('yes got it in descending order:', sortedArr[mid]);
            } else if (sortedArr[mid] > given) {
                left = mid + 1
            } else if (sortedArr[mid] < given) {
                right = mid - 1
            }
        }
    }
    return console.log('muri kha')
}

binnarySearch(array, 12)
// console.log(array);
