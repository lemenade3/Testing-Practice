import {capitalize, reverseString, calculator, analyseArray} from './index'

// Tests capitalize

test('Returns string with first letter capitalized', () => {
    expect(capitalize('portugal')).toBe('Portugal')
})

test('Returns alternative string with first letter capitalized', () => {
    expect(capitalize('clifford')).toBe('Clifford')
})

test('Works if already capitalized', () => {
    expect(capitalize('Clifford')).toBe('Clifford')
})

test('Converts other letters to lower case', () => {
    expect(capitalize('cliFfOrd')).toBe('Clifford')
})

// Tests reverseString

test('Reverses a string', () => {
    expect(reverseString('muggins')).toBe('sniggum')
})

test('Reverses a string', () => {
    expect(reverseString('cats and dogs')).toBe('sgod dna stac')
})

// Tests Calculator

test('Calculator is an Object', () => {
    expect(typeof calculator === 'object').toBeTruthy()
})

// Tests Add

test('Calculator adds', () => {
    expect(calculator.add(2, 5)).toBe(7)
})

test('Calculator add rejects NaN', () => {
    expect(calculator.add(2, "r")).toBe('Error')
})

test('Add works with negative numbers', () => {
    expect(calculator.add(2, -5)).toBe(-3)
})

// Tests Subtract

test('Calculator subtracts', () => {
    expect(calculator.subtract(5, 2)).toBe(3)
})

test('Calculator subtract rejects NaN', () => {
    expect(calculator.subtract(2, 'M')).toBe('Error')
})

test('Calculator subtract works with negative numbers', () => {
    expect(calculator.subtract(2, -3)).toBe(5)
})

// Tests Divide

test('Calculator divides', () => {
    expect(calculator.divide(4, 2)).toBe(2)
})

test('Calculator divides rejects NaN', () => {
    expect(calculator.divide(4, 'W')).toBe("Error")
})

test('Calculator divides negative numbers', () => {
    expect(calculator.divide(4, -2)).toBe(-2)
})

// Tests Multiply

test('Calculator multiplies', () => {
    expect(calculator.multiply(4, 2)).toBe(8)
})

test('Calculator multiply rejects NaN', () => {
    expect(calculator.multiply(4, 'W')).toBe("Error")
})

test('Calculator multiplies negative numbers', () => {
    expect(calculator.multiply(4, -2)).toBe(-8)
})

// Tests caeserCipher

test('caeserCipher', () => {
    expect(calculator.caeserCipher('Hello', 2)).toBe('Jgnnq')
})

test('caeserCipher works with wrapping', () => {
    expect(calculator.caeserCipher('Zoom', 2)).toBe('Bqqo')
})

test('caeserCipher works with negative numbers', () => {
    expect(calculator.caeserCipher('Zoom', -2)).toBe('Xmmk')
})

test('caeserCipher works with negative wrapping', () => {
    expect(calculator.caeserCipher('About', -2)).toBe('Yzmsr')
})

test('caeserCipher works with large numbers', () => {
    expect(calculator.caeserCipher('confidential', 256)).toBe('ykjbezajpewh')
})

test('caeserCipher ignores special characters', () => {
    expect(calculator.caeserCipher("We're having a good time!", 5)).toBe("Bj'wj mfansl f ltti ynrj!")
})

test('caeserCipher ignores numbers', () => {
    expect(calculator.caeserCipher("5", 5)).toBe("5")
})

// Tests analyseArray

test('analyzeArray returns an object', () => {
    expect(typeof analyseArray([1,2,3,4]) === 'object').toBeTruthy()
})

test('Returns array average', () => {
    expect(analyseArray([3,5,9,7]).average).toBe(6)
})

test('Returns array average', () => {
    expect(analyseArray([3,5,9,7]).average).toBe(6)
})

test('Returns array minimum', () => {
    expect(analyseArray([4,8,1,5,9,7]).min).toBe(1)
})

test('Returns array maximum', () => {
    expect(analyseArray([4,8,1,5,9,7]).max).toBe(9)
})

test('Returns array length', () => {
    expect(analyseArray([4,8,1,5,9,7]).length).toBe(6)
})