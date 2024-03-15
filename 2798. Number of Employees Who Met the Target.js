var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let counter = 0;
    for(let i=0;i<hours.length;i++){
        if(hours[i] >= target){
            counter ++;
        }
    }
    return counter;
};