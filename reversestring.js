const str = " hello world "

function solve(A) {
    let length = A.length
    let words = []
    let word = ''

    for(let i = 0; i < length; i++) {
        if(A[i] !== ' ') {
            word += A[i]
        } else {
            if(word) {
                words.push(word)
                word = ''
            }
        }
    }
    if(word) {
        words.push(word)
    }
    console.log(words)
    let result = ''
    for(let i = words.length - 1; i>=0; i--) {
        if( i !== words.length - 1) {
            result += ' '
        }
        result += words[i]
    }
    console.log(result);
}

const result = solve(str)
console.log(result)


// const str = '   hello    world    '

// function removeTrailingLeadingSpace(a) {
//     let result = ''
//     let startIndex = 0
//     let lastIndex = a.length - 1
//     for(let i = 0; i<a.length-1; i++) {
//         if(a[i] !== ' ') {
//             startIndex = i
//             break
//         }
//     }
//     // console.log(startIndex)
//     for(let i = a.length -1; i>=0; i--) {
//         if(a[i] !== ' ') {
//             lastIndex -= 1
//             break
//         }
//     }
//     // console.log(lastIndex)
//     for(let i=startIndex; i<=lastIndex; i++){
//         result += a[i]
//     }
//     // console.log(result)
//     return result
// }

// // console.log(removeTrailingLeadingSpace(str))

// function strReverse(a) {
//     let b = removeTrailingLeadingSpace(a)
//     // let b = 'a   b'
//     let result = '';
//     let prevFound = false
//     for(let i=0; i<b.length; i++){
//         if(b[i] !== ' ') {
//             result += b[i]
//             if(prevFound) {
//                 prevFound = false
//             }
//             console.log(b[i])
//         } else if(b[i] === ' ' && !prevFound) {
//             result += b[i]
//             prevFound = true
//             console.log(b[i])
//         }
//     }
//     return result;
// }

// const result = strReverse(str)
// console.log(result)