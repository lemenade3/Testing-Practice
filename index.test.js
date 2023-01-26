import {capitalize, reverseString} from './index'

// Tests capitalize

test('Returns string with first letter capitalized', () => {
    expect(capitalize('portugal')).toBe('Portugal')
})

test('Returns alternative string with first letter capitalized', () => {
    expect(capitalize('clifford')).toBe('Clifford')
})

// Tests reverseString

test('Reverses a string', () => {
    expect(reverseString('muggins')).toBe('sniggum')
})

test('Reverses a string', () => {
    expect(reverseString('cats and dogs')).toBe('sgod dna stac')
})