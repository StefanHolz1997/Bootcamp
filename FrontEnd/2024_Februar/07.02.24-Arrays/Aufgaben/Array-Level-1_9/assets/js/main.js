const nums = [23, 54, 75];
console.log(nums);

nums.push(34, 76, 12, 98, 4332);
console.log(nums);

nums.unshift(42, 69, 420, 1337, 31);
console.log(nums);

nums.pop();
nums.pop();
console.log(nums);

nums.shift();
nums.shift();
console.log(nums);

// Mit einer zeile zwei Werte gelöscht (hinten)
nums.splice(7, 2);
console.log(nums);

// Mit einer Zeile zwei Werte gelöscht (vorne)
nums.splice(0, 2);
console.log(nums);
