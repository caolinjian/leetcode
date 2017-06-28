/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let size= s.length;
    if (numRows == 1 || numRows>=size) {
        return s
    }
    let all = Math.floor((size-1) / (2 * numRows - 2))+1;
    let result =[];
    for (let i = 0; i < size; i++) {
        let group = Math.floor(i / (2 * numRows - 2));
        let groupIndex = i % (2 * numRows - 2);
        if (groupIndex < numRows) {
            result[groupIndex*all*(numRows-1)+group*(numRows-1)]=s[i]
        } else {
            result[(numRows - (groupIndex + 1 - numRows) - 1)*all*(numRows-1)+group*(numRows-1)+groupIndex-numRows+1] = s[i];
        }
    }
    return result.join('')
};

var convert = function(s, numRows) {
    let size= s.length;
    if (numRows == 1 || numRows>=size) {
        return s
    }
    var result = [];
    var step = 1, index = 0;
    for(var i = 0; i < size; i++){
        if(result[index] === undefined){
            result[index] = '';
        }
        result[index] += s[i];
        if(index === 0){
            step = 1;
        }else if(index === numRows - 1){
            step = -1;
        }
        index += step;
    }
    return result.join('');
};
