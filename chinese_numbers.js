const numbers = {
    0:'零',
    1:'一',
    2:'二',
    3:'三',
    4:'四',
    5:'五',
    6:'六',
    7:'七',
    8:'八',
    9:'九',
    2.2:'两'
};
const bigNumbers = ['','十','百','千','万'];

function convertToNumbers(num) {
    let digits = num.toString().split('');
    let result = [];

    for(i=digits.length; i>0; i--) {
        // if two numbers next to each other are not 0s
        if(!(digits[i-1]==0 && digits[i]==0)) {
            // if a num is 0
            if(digits[i-1]==0) {
                result.unshift(numbers[digits[i-1]])
            }
            else{
                result.unshift(numbers[digits[i-1]] + bigNumbers[digits.length-i]);
            }
        }
    }

    for(i=0; i<result.length; i++) {
        //if there's 二 before 千 or 万 change it to 两
        if (result[i].includes('二千')||result[i].includes('二万')) {
            result[i] = result[i].replace(numbers[2], numbers[2.2])
        }
    }

    //if 0 is the last character => omit it
    if(result[result.length-1] == '零') {
        result.pop();
    }

    //connecting the string
    return result.join('');
}
console.log(convertToNumbers(34284));