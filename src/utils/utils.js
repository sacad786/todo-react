export function progressDays(arr) {
    let count = 0
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]  < arr[index+1]) {
            count++
        }
        
    }
    return count
}

export function arrayOfMultiples(num, len){
    let arr = []
    for (let index = 1; index <= len; index++) {
        arr.push(index * num)
    }

    return arr
}

export function changeEnough (arr, num){
    const quarter = 0.25
    const dime = 0.10
    const nickel = 0.05
    const penny = 0.01

    const total = (arr[0] * quarter) + (arr[1] * dime) + (arr[2] * nickel)  + (arr[3] * penny)
    return total >= num ? true : false 
}

export function keysAndValues(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let keyValuePairsSeperated = [];
    keyValuePairsSeperated.push(keys,values)
    return keyValuePairsSeperated
}

export function RemoveTrailingAndLeadingZeros(str) {
    let removeZeros = Number(str)
     return removeZeros + ''
}




