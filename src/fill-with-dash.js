const trimDotEnd = function(string) {
    let result = string
    index = result.lastIndexOf('.')
    if (index === result.length - 1) {
        result = result.substring(0, result.length - 1)
        result = trimDotEnd(result)
    }
    return result
}

const fillWithDash = function (array) {
    let result = ""
    if (array.length > 0) {
        result = array.join('-')
        result = trimDotEnd(result)
        result = result.toLowerCase()
            .replace(/\./g, '-');
    }
    return result
}

module.exports = {
    fillWithDash,
    trimDotEnd
}