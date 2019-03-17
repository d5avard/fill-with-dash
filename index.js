const yargs = require('yargs')

const main = function (argv) {
    let result =  convert(argv._)
    console.log(result)
}

const convert = function (array) {
    let result = ""
    if (array.length > 0) {
        result = array.join('-')
            .toLowerCase()
            .replace(/\./g, '-');
    }
    return result
}

main(yargs.argv)



