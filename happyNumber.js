var isHappy = function(n) {
    let set = new Set()
    let num = n;
    while(num !== 1){
        const digits = [...num.toString()]
        const squares = digits.map(digit => Number(digit)**2 )
        num = squares.reduce((prev, curr) => prev + curr, 0);
        if(set.has(num)) return false;
        set.add(num);
    }
    return true
};