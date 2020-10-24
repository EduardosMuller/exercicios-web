const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if( x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if(y == 5) {
        continue // pula uma repetição e continua
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (let a in nums) { // criado um rotulo para referenciar o break a ele
    for (let b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}