/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let index =0;
    let max = 0;
    let stack = [];
    for (let i =0; i < s.length; i++) {
        if(s[i]=='('){
            stack.push(i)
        }else{
            let last = stack.pop();
            if(s[last]!='('){
                index=i+1;
            }else if(stack.length==0){
                max=Math.max(max,i-index+1)
            }else{
                max=Math.max(max,i-stack.slice(-1))
            }
        }
    }
    return max
};

/* DP solution
* If s[i] is '(', set longest[i] to 0,because any string end with '(' cannot be * a valid one.
*
* Else if s[i] is ')'
*
*     If s[i-1] is '(', longest[i] = longest[i-2] + 2
*
*     Else if s[i-1] is ')' and s[i-longest[i-1]-1] == '(', longest[i] = longest[i-1] + 2 + longest[i-longest[i-1]-2]
*
*/

var chai = require('chai');
var assert = chai.assert;

describe('longestValidParentheses', () => {
  it('test ()', () => {
      assert.equal(2,longestValidParentheses('()'));
  });
  it('test )', () => {
      assert.equal(0,longestValidParentheses(')'));
  });
  it('test (()()', () => {
      assert.equal(4,longestValidParentheses('(()()'));
  });
  it('test ()(()', () => {
      assert.equal(2,longestValidParentheses('()(()'));
  });
  it('test (()())()))', () => {
      assert.equal(8,longestValidParentheses('(()())()))'));
  });
  it('test (()())()))(()()()())', () => {
      assert.equal(10,longestValidParentheses('(()())()))(()()()())'));
  });
});
