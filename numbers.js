const numbers = ['零','一','二','三','四','五','六','七','八','九','十'];
const bigNumbers = ['亿', '万', '千', '百', '十', '一'];
const nums = [ 100000000, 10000, 1000, 100, 10, 1];
const liang = '两';

function convertNumbers(number) {
    if(number >= 0 && number <= 10){
        return numbers[number]
    }
    let current = number;
    let out = [];
    let alreadyStarted = false;

    for( let [i, value] of nums.entries()) {
        if (current >= value) {
            alreadyStarted = true;
            let toSave = Math.floor(current/value);
            if (!(10 < current && current < 20)) {
                out.push(convertNumbers(toSave));
            }
            if (value !== 1) {
                out.push(bigNumbers[i]);
            }
            current = current - (value*toSave);
        }
        else if (alreadyStarted) {
            out.push('零');
        }
    }
    out = out.join('').replace(/零+/, '零');

    if ( out.includes('二千') || out.includes('二万') ) {
        out = out.replace(numbers[2], liang)
    }
    if(out[out.length-1] === '零') {
        return out.slice(0, -1);
    }

    return out
}

console.log(convertNumbers(652455));
