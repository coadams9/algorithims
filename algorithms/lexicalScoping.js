// for (let i = 0; i < 10; i++) {
//     // console.log(i)
//     setTimeout(() => {
//         console.log('The number is ' + i)
//     }, 1000)
// }



// function a() {
//     var num = 0
//     b()
//     function b() {
//         // num = 1
//         c()
//         function c() {
//             // num = 2
//             console.log(num)
//             var car = 'ford'
//         }
//     }
// }

// a()

// -----------------------------------------------------

// var x = 1
// {
//     x = 2
//     {
//         x = 3
//         {
//             console.log(x)
//         }
//     }
// }


// ------------------------------------------------------
const num = 6


function one() {
    console.log('inside one and num is ', num)
}

function two() {
    const num = 3

    one()
}

two()
// -----------------------------------------------------

// const variable = 'global'

// function one() {
//     function two() {
//         console.log('inside function two and var is', variable)
//     }

//     const variable = 'function ones scope changed me'

//     two()
// }

// one()

// -----------------------------------------------------
