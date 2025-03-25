//Opeerator
//Arithmetic Operator + - * / %(หารเอาเศษ) **(ยกกำลัง) ++(เพิ่มที่ละ 1) --(ลดทีละ 1)
//Comparision Operator ==(ดูอักขระ) ===(ดูชนิดข้อมูล) != !== > < >= <=

console.log(`10` == 10) //true
console.log(`10` === 10 ) //false

//logical Operator !(ไม่ใช่) &&(และ จริงเจอเจริง จะเป็นจริงที่เหลือเป็นเท็จ) ||(หรือ เท็จเจอเท็จ เป็นเท็จที่เหลือเป็นจริง)

//assignment operator = += *= /= %= **=
let x = 1, y = 2
x = x + 1 + 554 * y
x += 1 + 554 * y

//ternary Operator (พิสูจหลักฐาน) ____(ข้อมูล) ? ____(จริง): _____(เท็จ)
let aa = 10
let bb = aa - 3 * 2 === '25' ? `Wow...` : `Hi...`

console.log(bb)

//Nullish Coalescing Operator ??

let cc = 50
let dd = null
console.log(cc ?? `SAU.....`) //50
console.log(dd ?? `DTI.....`) //DTI.....