const repeatString = function(print, counter ) {
 
let output ="";

if(counter >= 0){
    for(let i = 1; i <= counter; i++ ){
        output += print;
    }
    return output;
}
else{
    output = "ERROR";
    return output;
}




};

// Do not edit below this line
module.exports = repeatString;
