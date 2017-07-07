/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    //return new RegExp('^'+p+'$').test(s)
    var sLen = s.length;
    var pLen = p.length;
    var i,j;
    var dp = new Array(pLen + 1);
    for(i = 0; i <= pLen; i++) {
        dp[i] = new Array(sLen + 1).fill(false);
    }
    dp[0][0] = true;

    for (i = 2; i <= pLen; i++) {
        dp[i][0] = dp[i-2][0] && p.charAt(i-1) == '*';
    }

    for (i = 1; i <= pLen; i++) {
        for(var j = 1; j <= sLen; j++) {
            if(p.charAt(i-1) != '*') {
                dp[i][j] = dp[i-1][j-1] && (p.charAt(i-1) == s.charAt(j-1) || p.charAt(i-1) == '.');
            } else {
                dp[i][j] = dp[i-2][j] || dp[i-1][j];
                if(p.charAt(i-2) == s.charAt(j-1) || p.charAt(i-2) == '.') {
                    dp[i][j] = dp[i][j]||dp[i][j-1];
                }
            }
        }
    }
    return dp[pLen][sLen]
};
