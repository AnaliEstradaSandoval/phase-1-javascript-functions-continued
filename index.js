function saturdayFun(activity){
    if (activity){
        return `This Saturday, I want to ${activity}!`
    } else{
    return "This Saturday, I want to roller-skate!"
    }
}

const mondayWork = function(activity){
    if (activity){
        return `This Monday, I will ${activity}.`
    }else {
        return 'This Monday, I will go to the office.'
    }
}

function wrapAdjective(part1 = "*") {
    return function (part2 = "special"){
        return `You are ${part1}${part2}${part1}!`
    } ;
}