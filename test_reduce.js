let arr = [3, 8, 56, 0, 12, 1, 100, 3, 8,12]

let i = 0;
let res = arr.reduce((prev, cur) => {
    console.log('第 ' + (i++) + ' 次循环')
    console.log('prev:' + prev)
    console.log('cur:' + cur)
    return prev + cur
})

console.log('res:' + res)