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
    10:'十'
    // 2.2:'两'
};

const numberz = ['一','二','三','四','五','六','七','八','九'];
const bigNumbers = ['一','十','百','千','万'];
const nums = [1, 10, 100, 1000, 10000];

function convertNumbers(number) {
    if(number > 0 && number < 10){
        return numberz[number-1]
    }
    let current = number;
    let out = [];
    let alreadyStarted = false;

    for( let [i, value] of nums.reverse().entries()) {

        if (current >= value) {
            alreadyStarted = true;
            toSave = Math.floor(current/value);
            if (!(10 < current && current < 20)) {
                out.push(convertNumbers(toSave));
            }
            if (value !== 1) {
                out.push(bigNumbers.reverse()[i]);
            }
            current = current - (value*toSave);
        }
        else if (alreadyStarted) {
            out.push('零');
        }
        return out.join('');
    }
}

console.log(convertNumbers(175321));
