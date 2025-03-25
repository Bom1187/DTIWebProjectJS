// Variable ตัวแปร
//var เปลี่ยนค่าได้  กำหนดค่าทีหลังได้ เป็น Global
//let เปลี่ยนค่าได้  กำหนดค่าทีหลังได้ เป็น Local
//const เปลี่ยนค่าไม่ได้ กำหนดค่าทีหลังไม่ได้ ต้องกำหนดค่าเลย เป็น Local

var aa
aa = 10
var bb = 20
aa = 100
bb = 300

let cc
cc = 30 
let dd = 40
cc = 300
dd = 400

// const ee error
const ee = 50
// ee = 500 error

// scope ขอบเขตการทำงาน คือ {...............} (Global/Local)
var a1 = 10
let a2 = 20
const a3 = 30
{
    var b1 = 100
    let b2 = 200
    const b3 = 300
    {
        var c1 = 1000
        let c2 = 2000
        const c3 = 3000
        console.log(a2)
        console.log(b2)
        console.log(c2)
    }
    console.log(a2)
    console.log(b2)
    // console.log(c2) error
}
console.log(a2)
// console.log(b2) error
// console.log(c2) error