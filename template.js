console.clear()
const testStr = 'Madam'
const palindrome = (str) => {
    for(let i = 0; i < str.length; i++){
        let letter = str[i]
        console.log(`\n new iteration: `, {letter, i});
    }
}
const result =palindrome(testStr)

console.log('\n final result: ', result)