// code your solution here
function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`
};
saturdayFun('Bathe my dog');

const mondayWork = function(work = 'go to the office') {
        return `This Monday, I will ${work}.`
};
mondayWork('work from home')

function wrapAdjective (val1 = '*') {
    return function (val2 = 'special') {
        return `You are ${val1}${val2}${val1}!`
    }
}
wrapAdjective("%")("a dedicated programmer");