var defangIPaddr = function(address) {
    let defangIpString = address.replaceAll(".","[.]")
    return defangIpString
};