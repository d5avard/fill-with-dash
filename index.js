const yargs = require('yargs')
const fillWithDash = require('./src/fill-with-dash')

const main = function (argv) {
    let result = fillWithDash(argv._)
    console.log(result)
}

main(yargs.argv)
