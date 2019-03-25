const expect = require('expect')

const { 
    fillWithDash, 
    trimDotEnd } = require('../src/fill-with-dash')

test ('Should fill space character with dash.', () => {
    const array = "How to export the data present in await".split(' ')
    const result = fillWithDash(array)
    expect(result).toBe('how-to-export-the-data-present-in-await')
})

test ('Should fill space character and dot with dash.', () => {
    const array = "How to export the data present in await in node.js".split(' ')
    const result = fillWithDash(array)
    expect(result).toBe('how-to-export-the-data-present-in-await-in-node-js')
})

test('Should remove dot character from the end of the sentence.', () => {
    string = "How to export the data present in await."
    const result = trimDotEnd(string)
    expect(result).toBe('How to export the data present in await')
})

test('Should remove three dots character form the end of the sentence.', () => {
    string = "How to export the data present in await..."
    const result = trimDotEnd(string)
    expect(result).toBe('How to export the data present in await')
})

test('Should remove five dots character form the end of the sentence.', () => {
    string = "How to export the data present in await....."
    const result = trimDotEnd(string)
    expect(result).toBe('How to export the data present in await')
})