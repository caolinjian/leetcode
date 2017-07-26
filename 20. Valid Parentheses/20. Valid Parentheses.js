/**
 * @param {string} s
 * @return {boolean}
 */
var isValid2 = function(s) {
    if(s.length%2===1){
        return false;
    }
    var bracket=['{}','[]','()'];
    var f=true;
    while(f){
        f=false;
        for(let i=s.length-2;i>=0;i--){
            if(bracket.includes(s.substr(i,2))){
                s=s.substr(0,i)+s.substring(i+2);
                f=true
            }
        }
    }
    return s.length===0
};

var isValid = function(s) {
    if(s.length%2===1){
        return false;
    }
    var brackets=['{}','[]','()'];
    if(brackets.includes(s)||s===""){
        return true;
    }
    var bracket={
        '{':'}',
        '[':']',
        '(':')',
    };
    let index = s.indexOf(bracket[s[0]]);
    if(index<0){
        return false;
    }
    let lastIndex = s.substring(0,index+1).lastIndexOf(s[0]);
    if(lastIndex<0){
        return false;
    }
    if(!isValid(s.substring(lastIndex+1,index))){
        return false;
    }else{
        return isValid(s.substring(0,lastIndex)+s.substring(index+1))
    }
};

var isValid3 = function(s) {
    if(s.length%2===1){
        return false;
    }
    var stack = [];
    for (var i =0; i < s.length; i++) {
        var popped;
        switch(s[i]) {
            case '{':
                stack.push(s[i]);
                break;
            case '[':
                stack.push(s[i]);
                break;
            case '(':
                stack.push(s[i]);
                break;
            case '}':
                popped = stack.pop();
                if (popped !== '{') {
                    return false;
                }
                break;
            case ']':
                popped = stack.pop();
                if (popped !== '[') {
                    return false;
                }
                break;
            case ')':
                popped = stack.pop();
                if (popped !== '(') {
                    return false;
                }
                break;
        }
    }
    return stack.length==0;
};

var chai = require('chai');
var assert = chai.assert;

describe('isValid2', () => {
  it('test {}[]()', () => {
      assert.isTrue(isValid2('{}[]()'));
  });
  it('test []({}[])[{}()]()([])', () => {
      assert.isTrue(isValid2('[]({}[])[{}()]()([])'));
  });
  it('test {}[(]())', () => {
      assert.isFalse(isValid2('{}[(]())'));
  });
});

describe('isValid', () => {
  it('test {}[]()', () => {
      assert.isTrue(isValid('{}[]()'));
  });
  it('test []({}[])[{}()]()([])', () => {
      assert.isTrue(isValid('[]({}[])[{}()]()([])'));
  });
  it('test {}[(]())', () => {
      assert.isFalse(isValid('{}[(]())'));
  });
});

describe('isValid3', () => {
  it('test {}[]()', () => {
      assert.isTrue(isValid3('{}[]()'));
  });
  it('test []({}[])[{}()]()([])', () => {
      assert.isTrue(isValid3('[]({}[])[{}()]()([])'));
  });
  it('test {}[(]())', () => {
      assert.isFalse(isValid3('{}[(]())'));
  });
});
