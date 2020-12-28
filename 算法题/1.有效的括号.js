/* 
    力扣第20题：有效的括号
    题目描述：
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
    有效字符串需满足：
        左括号必须用相同类型的右括号闭合。
        左括号必须以正确的顺序闭合。
        注意空字符串可被认为是有效字符串。

    示例 1:
    输入: "()"
    输出: true

    示例 2:
    输入: "()[]{}"
    输出: true

    示例 3:
    输入: "(]"
    输出: false

    示例 4:
    输入: "([)]"
    输出: false

    示例 5:
    输入: "{[]}"
    输出: true

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/valid-parentheses
    
    解题思路：
    (1)栈的特点，后进先出
    (2)首先判断字符串长度的奇偶性，奇数直接返回false
    (3)其次声明一个空数组（数组是栈的一种），然后循环字符串s，将左括号放进stack栈中
    (4)接着判断stack的最后一项是不是与接下来的那项能够配对，如果可以，则去掉栈顶，如果匹配不了返回false
    (5)最后返回stack的长度是不是等于0，等于0说明所以括号都能匹配，不等于0说明有的不能匹配

*/

var isValid = function (s) {
  if (s.length % 2) {
    return false
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if (
        (t === '(' && c === ')') ||
        (t === '[' && c === ']') ||
        (t === '{' && c === '}')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

const s = '(){}'
console.log(isValid(s))
