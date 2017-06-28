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
