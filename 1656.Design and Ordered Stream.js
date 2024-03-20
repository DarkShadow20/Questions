var OrderedStream = function(n) {
    pointer = 0
    stream = new Array(n)
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    stream[idKey-1] = value
    let result = []
    if(!stream[pointer]) return[]
    else{
        while(stream[pointer]){
            result.push(stream[pointer]);
            pointer++
        }
    }
    return result
};