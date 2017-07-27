/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let resNum = [''];
    for(let i=0;i<n-1;i++){
        while(resNum[0].length==i){
            let s = resNum.shift();
            max = s?i-parseInt(s.split('').reduce((x,y)=>parseInt(x)+parseInt(y)))+1:i+1
            for(let j=0;j<=max;j++){
                resNum.push(s+j)
            }
        }
    }
    let result = []
    for(let i=0;i<resNum.length;i++){
        let temp='(';
        let nums =0;
        for(let j in resNum[i]){
            temp+=')'.repeat(parseInt(resNum[i][j]))
            nums+=parseInt(resNum[i][j]);
            temp+='('
        }
        temp+=')'.repeat(n-nums)
        result.push(temp)
    }
    return result;
};

function generateParenthesisHelper(left, right, path, res){
    if(left === 0 && right === 0){
        res.push(path);
        return;
    }

    if(left > 0){
        generateParenthesisHelper(left-1, right, path+"(", res);
    }

    if(left < right){
        generateParenthesisHelper(left, right-1, path+")", res);
    }
}

var generateParenthesis2 = function(n) {
    //special case
    if(n <= 0){
        return [];
    }

    var res = [];
    generateParenthesisHelper(n, n, "", res);
    return res;
};
