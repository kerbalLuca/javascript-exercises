const sumAll = function(start, end) {
    if (!(typeof start == 'number')||!(typeof end == 'number')||(start <0)||(end<0)||!(start%1 == 0)||!(end%1 == 0)) {
        return "ERROR"
    }
    const array = [start, end].sort((a,b)=>a-b)
    let sum = 0;
    for (let i = array[0]; i <=(array[1]); i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
