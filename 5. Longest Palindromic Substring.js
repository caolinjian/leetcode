/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) {
        return 0
    }
    var a = s.split(''),
        size = a.length,
        maxLen = 1,
        offset = 0,
        left,right;
    loop1 : for (let i = 1; i < size; i++) {
        if (i - maxLen >= 1) {
            let half = i - maxLen - 1 + (maxLen + 1) / 2;
            left = i - maxLen - 1;
            right = i;
            while (left <= half && right >= half) {
                if (a[left] !== a[right]) {
                    break;
                }
                left++;
                right--;
                if (left > half && right < half) {
                    offset = i - maxLen - 1;
                    maxLen += 2
                    continue loop1;
                }
            }

        }
        if (i - maxLen >= 0) {
            let half = i - maxLen + maxLen / 2;
            left = i - maxLen;
            right = i;
            while (left <= half && right >= half) {
                if (a[left] !== a[right]) {
                    break;
                }
                left++;
                right--;
                if (left > half && right < half) {
                    offset = i - maxLen;
                    maxLen += 1
                }
            }
        }
    }
    return s.substring(offset, offset + maxLen)
};
var longestPalindrome2 = function(s) {
    var len = s.length, max = 1, start = 0, newLen = 0;
    if (len <= 1){ return s;}
    for (var i=0; i < len;){
        if ((len-i) <= max/2){
            break;
        }
        var j = i,
            k = i;
        while(k < len-1 && s[k] === s[k+1]){
            k++;
        }
        i = k+1;
        while(k<len-1 && j>0 && s[k+1] === s[j-1]){
            k++;
            j--;
        }
        newLen = k-j+1;
        if (newLen > max){
            max = newLen;
            start = j;
        }

    }
    return s.substr(start, max);
};
var longestPalindrome3 = function(s) {

  // Manacher's Algorithm

  // Justify if {string} s is totally palindrome string
  var i
    , len = Math.floor(s.length / 2) + 1
    , isTotalPalindrome = true

  for (i = 0; i < len; i++) {
    if (s[i] != s[s.length - i - 1]) {
      isTotalPalindrome = false
      break;
    }
  }

  if (isTotalPalindrome) return s;

  // preprocess, make {string} s must contain a palindrome of odd length
  s = [].join.call(s, '#')
  s = '$#' + s + '#$'

  var p = []
    , C = 1
    , R = 1
    , iMirror
    , max = 0
    , maxIndex
  for (i = 1; i < s.length - 1; i++) {
    iMirror = 2 * C - i;

    p[i] = (R > i) ? Math.min(R - i, p[iMirror]) : 1
    while (s[i - p[i]] == s[i + p[i]]) p[i]++

    if (i + p[i] > R) {
      R = i + p[i]
      C = i
    }

    if (p[i] > max) {
      max = p[i]
      maxIndex = i
    }
  }
  console.log(s,p,max,maxIndex);
  return s.substr(maxIndex - max + 1, 2 * max - 1).replace(/[$#]/g, '')
}
longestPalindrome3("cbbd")
