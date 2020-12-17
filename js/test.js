const str = '2';// 2,3,4按键
// 按键从2开始才有字母
const a = {
  2: 'abc', 3: 'def', 4: 'ghi', 
  5: 'jkl', 6: 'mno',
  7: 'pqr', 8: 'stu', 9: 'vwxyz'
}
// 数组->拿到234按键的字母组成的数组->['abc', 'def', 'ghi']
let code = str.split('').map(ee => a[ee]);
// 使用递归->获取23数字代表的字母组合的数组后与4代表的字母ghi继续循环组合
let comb = (arr) => {
  let temp = []
  for (let i in arr[0]) {
    for (let j in arr[1]) {
      temp.push(`${arr[0][i]}${arr[1][j]}`)
    }
  }
  
  if (arr.length > 1) {
	arr.splice(0, 2, temp)
    comb(arr)
  } else {
	  console.log(arr.length)
    return temp
  }
  return arr[0]
}
 
console.log(comb(code))
//adg,adh,adi,aeg,aeh,aei,afg,a