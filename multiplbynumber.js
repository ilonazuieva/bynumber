function multiply(number){
    let s = number.toString().replace('-', '').length;
    for( let i  = 0; i < s; i++ )
        number *= 5;
    return number;
}
//https://www.codewars.com/users/zuieva/completed_solutions