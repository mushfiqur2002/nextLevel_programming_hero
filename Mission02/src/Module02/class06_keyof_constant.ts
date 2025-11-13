interface studentInfo extends bikeInfo, carInfo {
    id: string,
    name: string,
    department: string,
    result: number
}

interface bikeInfo {
    bike: boolean
}
interface carInfo {
    bike: boolean
}





const student: studentInfo = {
    id: 'cs2203045',
    name: 'md mushfiqur nasim',
    department: 'cse',
    result: 3.45,
    bike: false
}

const getItemsFromObject = <T>(object: T, key: keyof T) => {
    return object[key]
}

console.log(getItemsFromObject(student, 'id'));
