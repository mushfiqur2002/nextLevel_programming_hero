let array = [2, 11, 7, 15, 5, 4, 3, 1, 9]
let target = 10
let sumArray = []
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] + array[j] === target) {
            sumArray.push(array[i])
        }
    }
}
console.log(sumArray);

function twoSumMap(arr, target) {
    let map = new Map()
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let needed = target - num

        if (map.has(needed)) {
            result.push({
                pair: [needed, num],
                index: [map.get(needed), i]
            })
        }
        map.set(num, i)
    }
    console.log(map);
    
    console.log('map :', result);

}

console.log(twoSumMap(array, target));