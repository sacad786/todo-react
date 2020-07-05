import {progressDays, arrayOfMultiples, changeEnough, keysAndValues, RemoveTrailingAndLeadingZeros} from './utils'


test('should return progressDays', () => {
    expect(progressDays([3, 4, 1, 2]))
    .toBe(2)

    expect(progressDays([10, 11, 12, 9, 10]))
    .toBe(3)

    expect(progressDays([6, 5, 4, 3, 2, 9]))
    .toBe(1)

    expect(progressDays([9, 9]))
    .toBe(0)
})


test('should return arrayOfMultiples', () => {
    expect(arrayOfMultiples(7, 5))
    .toEqual([7, 14, 21, 28, 35])

    expect(arrayOfMultiples(12, 10))
    .toEqual([12, 24, 36, 48, 60, 72, 84, 96, 108, 120])

    expect(arrayOfMultiples(17, 6))
    .toEqual([17, 34, 51, 68, 85, 102])

    expect(arrayOfMultiples(100, 3))
    .toEqual([100, 200, 300])
})

test('should return changeEnough', () => {
    expect(changeEnough([2, 100, 0, 0], 14.11))
    .toEqual(false)

    expect(changeEnough([0, 0, 20, 5], 0.75))
    .toEqual(true)

    expect(changeEnough([30, 40, 20, 5], 12.55))
    .toEqual(true)

    expect(changeEnough([10, 0, 0, 50], 3.85))
    .toEqual(false)

    expect(changeEnough([1, 0, 5, 219], 19.99))
    .toEqual(false)
})

test('should return keysAndValues', () => {
    expect(keysAndValues({ a: 1, b: 2, c: 3 }))
    .toEqual([["a", "b", "c"], [1, 2, 3]])

    expect(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
    .toEqual( [["a", "b", "c"], ["Apple", "Microsoft", "Google"]])

    expect(keysAndValues({ key1: true, key2: false, key3: undefined }))
    .toEqual( [["key1", "key2", "key3"], [true, false, undefined]] )
})
// edge cases
test('should return removeLeadingTrailing', () => {
    expect(RemoveTrailingAndLeadingZeros("230.000"))
    .toEqual("230")

    expect(RemoveTrailingAndLeadingZeros("00402"))
    .toEqual("402")

    expect(RemoveTrailingAndLeadingZeros("03.1400"))
    .toEqual("3.14")

    expect(RemoveTrailingAndLeadingZeros("30"))
    .toEqual("30")
   
})





