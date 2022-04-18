let typeList = {};
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map(item => {
    typeList[`[object ${item}]`] = item.toLowerCase();
})
console.log(typeList)
function type(target) {
    if (target == null) {
        return target + ""
    }
    console.log(Object.prototype.toString.call(target))
    return typeof target === 'object' || typeof target === 'function' ?
        typeList[Object.prototype.toString.call(target)] || 'object':
        typeof target
}