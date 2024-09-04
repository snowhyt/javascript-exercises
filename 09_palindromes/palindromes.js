const palindromes = function (str) {
//     str.replace(/\s/g, "");
//     let j = str.length-1;

//     for(let i = 0; i <= str.length/2; i++){
    
//         if(j != i){
//             return true;
//         }
//         j--;
//     }
//     return false;
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const filteredString = str
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');



    let revString = filteredString.split('').reverse().join('');

    return filteredString === revString;

};





// Do not edit below this line
module.exports = palindromes;
