var arithmeticTriplets = function(nums, diff) {
    const hash = new Set();
    let ans = 0;
    for (const num of nums) {
        if (hash.has(num - diff) && hash.has(num - diff * 2)) ans++;
    hash.add(num);
  }
  return ans;
};

console.log(arithmeticTriplets([0,1,4,6,7,10]))