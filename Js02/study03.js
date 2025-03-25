//date type ชนิดข้อมูล
//string

let a = 'Hello'
let b = "Hi"
let c = `Hey`

//number
let d = 10 //integer
let e = 455.4555 //float

//boolean 
let f = true
let g = false

//array 
let h = [1,2,3,4,5]
let i = ['Hi','Hello','Bye']
let j = [10, 'Hello', true, 111, 555, [`aa`, `bb`, `cc`],{midScore:20,finalScore:85}] //แปลก
console.log(h[1])
console.log(i[2])
console.log(j[6].finalScore)

//object ****
let k = {
    //key : value
    fullname : `Somsri`,
    age : 20,
    salary : 5000,
    isMarried : true,
    food : [`apple`, `banana`, `orange`],
    address : {
        province : `YaiMak`,
        district : `Cowboy district`,
        zipcode : 15464,
        homeno: [`10/25`, `111/2`]
    }
}
console.log(k.fullname)
console.log(k.address.zipcode)
console.log(k.food[2])
console.log(k.address.homeno[1])

//undefined
let x
console.log(x)

//null
let y = null
console.log(y)
