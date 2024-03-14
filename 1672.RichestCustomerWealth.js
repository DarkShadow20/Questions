var maximumWealth = function(accounts) {
    let sumWealth = 0
    let numberOfBanks = accounts[0].length;
    let maxWealth = 0;
    for(let i=0;i<accounts.length;i++)
    {
        for(let j=0;j<numberOfBanks;j++){
            sumWealth = sumWealth + accounts[i][j];
        }
        if(maxWealth < sumWealth){
            maxWealth = sumWealth;
        }
        sumWealth = 0
    }
    return maxWealth
};

