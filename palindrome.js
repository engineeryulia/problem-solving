console.clear()
const testStr = 'Madoam'
const palindrome = (str) => {
    str = str.toLowerCase()
    console.log(str);
    let backStr=''
    for(let i = str.length-1; i >=0; i--){
        backStr += str[i]
        //console.log(backStr);
    }
    // if (backStr === str){
    //     return true;
    // }
    // return false;

    return backStr === str 
}
const palindrome2 = (str) => {
    str = str.toLowerCase()
    newStr = str.toLowerCase().split('').reverse().join('')
    console.log(str, newStr);
    return str === newStr
}

const palindrome3 = (str) => {
    for(let i = 0; i <= str.length / 2 -1; i++){
        // str = str.Math.floor
        let left = str[i].toLowerCase()
        let right = str[str.length-1-i].toLowerCase()
        if (left !== right){
            return false;
        }

    }
    return true;
    
}

const result3 = palindrome3(testStr)
const result2 = palindrome2(testStr)
const result =palindrome(testStr)

console.log('\n final result: ', result3)

