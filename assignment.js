//feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile ;
}
var result = feetToMile(15);
console.log("Feet to Mile = ", result)

//woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var sum = (chairCount + tableCount + bedCount);
    return sum;
}
var total = woodCalculator(12, 7, 5)
console.log("Wood Calculator =", total)

//brickCalculator
//Unfinish
function brickCalculator(floors){
    var perfeetbrick = 1000;
    if(brickCalculator <= 10){
        var perfloor = 15 * perfeetbrick;
       
    }
}
var floor10 = brickCalculator(8)
console.log(floor10)

//tinyFriend

function tinyFriend(friendNums){
    var min = friendNums[0];
    for (var i = 0; i < friendNums.length; i--){
        var element = friendNums[i];
        if(element  > min){
            min = element;
        }
    }
    return element;
}
var friendNums  =  ["Fahim", "Joy", "Sabbir", "Nitu", "Nirob", "Raju", "Nipa"];
var smallNameFriend = tinyFriend(friendNums)
console.log(friendNums)