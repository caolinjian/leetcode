/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    x=parseInt(str)||0
    if(x<-2147483648){
        return -2147483648
    }else if(x>2147483647){
        return 2147483647
    }else{
        return x
    }
};
