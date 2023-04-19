// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  let strNew = str.split("");

  let strRev = strNew.reverse();

  let finalStr = strRev.join("");

  return finalStr;
}

let str = "rovad krbiluc";

console.log(solution(str));
