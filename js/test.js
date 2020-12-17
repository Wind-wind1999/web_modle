let readline = require('readline');

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

function ques() {
	rl.question('请输入[2-9]任意数字或组合：',function(res){
		if (res == "exit") {
			rl.close();
		}
		combin(res);
		ques();
	})
}

ques();

function combin(str) {
	const a = {
	  2: 'abc', 3: 'def', 4: 'ghi', 
	  5: 'jkl', 6: 'mno',
	  7: 'pqrs', 8: 'tuv', 9: 'wxyz'
	}
	
	//处理输入的字符返回数组
	let code = str.split('').map(e => a[e]);
	
	//处理后的值只有一个就直接输出，不必继续运行
	if (code.length == 1) {
		console.log(code[0]);
		return;
	}
	
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
	    return temp
	  }
	  return arr[0]
	}	 
	console.log(comb(code))
}

rl.on('close', function(){
	process.exit(0)
})
