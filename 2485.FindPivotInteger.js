var pivotInteger = function(n) {
    const potentialPivot = Math.sqrt(n * (n + 1) / 2);
    if (Number.isInteger(potentialPivot)) {
    return Math.floor(potentialPivot); // If yes, return the floor value
    } else {
        return -1; // Otherwise, return -1 indicating no valid pivot
    }
};