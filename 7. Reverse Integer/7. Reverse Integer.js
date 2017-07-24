/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isMinus = false;
    if(x<0){
        isMinus=true;
        x=0-x
    }
    x+='';
    x=x.split('').reverse().join('');
    x=isMinus?-parseInt(x,10):parseInt(x,10);
    if(x<=-2147483648||x>2147483647){
        return 0
    }else{
        return x
    }
};
