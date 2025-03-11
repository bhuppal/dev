
function fizz(A){
    let result = []
    for(let i =1; i<=A; i++) {
        if(A[i] === 1) {
            result.push(1)
        }else if(A[i] === 2) {
            result.push(2)
        } else if( i %3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz')
        } else if( i %3 === 0) {
            result.push('Fizz')
        } else if( i % 5 === 0) {
            result.push('Buzz')
        } else {
            result.push(i)
        }
    }
    return result
}

console.log(fizz(3))