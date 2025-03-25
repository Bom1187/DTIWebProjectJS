//type conversion การแปลงข้อมูล
//string conversion

let a = `100`
let b = `5`
let c = ``
let d = `Wow`

console.log(Number(a) + Number(b))
console.log(parseInt(a) + parseInt(b))
console.log(parseFloat(a) + parseFloat(b))
console.log(Boolean(a))
console.log(Boolean(b))
console.log(Boolean(c))
console.log(Boolean(d))

//number conversion
let e = 100
let f = 522.54189
console.log(e.toString())
console.log(e.toString(2))
console.log(f.toString(4))
console.log(Boolean(e))
console.log(Boolean(f))
console.log(Boolean(0))

//boolean conversion
let h = true
let i = false
console.log(Number(h))
console.log(Number(i))
console.log(h.toString())
console.log(i.toString())

//array conversion
let j = [1,2,3]
let k = [4,5,6]
console.log(Boolean(j)) //true
console.log(Boolean(k)) //true

//object conversion
let l = {}
let m = { a:10, b:20, c:30 }
console.log(Boolean(l)) //true 
console.log(Boolean(m)) //true