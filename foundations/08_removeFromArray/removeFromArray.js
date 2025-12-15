const removeFromArray = function(...args) {
    const baseArray = args[0]
    const denyList = args.slice(1)
    return baseArray.filter((arrayElement) => !denyList.includes(arrayElement))
};

// Do not edit below this line
module.exports = removeFromArray;
