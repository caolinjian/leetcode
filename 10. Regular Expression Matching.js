/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    //return new RegExp('^'+p+'$').test(s)
    var table = new Array(p.length + 1);
    for(var i = 0; i < table.length; i++) {
        table[i] = new Array(s.length + 1).fill(false);
    }
    table[0][0] = true;

    for (var i = 2; i <= p.length; i++) {
        table[i][0] = table[i-2][0] && p[i-1] == '*';
    }

    for (var i = 1; i <= p.length; i++) {
        for(var j = 1; j <= s.length; j++) {
            if(p[i-1] != '*') {
                table[i][j] = table[i-1][j-1] && (p[i-1] == s[j-1] || p[i-1] == '.');
            } else {
                table[i][j] = table[i-2][j] || table[i-1][j];
                if(p[i-2] == s[j-1] || p[i-2] == '.') {
                    table[i][j] |= table[i][j-1];
                }
            }
        }
    }
    return Boolean(table[p.length][s.length])
};
