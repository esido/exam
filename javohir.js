// 2-misol

function call(){
    return 1
}
let arr = [call(),call(),call()]

let n = 10
function counter(){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        n = n + element
        return n - 1
    }
}
console.log(counter());
console.log(counter());
console.log(counter());


// 3-misol

function sleep(milles){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(milles)
        },milles)
    })
}
sleep(500).then((data)=>{
    let t = Date.now()
    console.log(Date.now() - t + data)
})




