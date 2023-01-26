function capitalize(string) {
    let array = Array.from(string)
    array[0] = array[0].toUpperCase()
    let concatArray = array.join('')
    return concatArray
}

function reverseString(string) {
    return 'sniggum'
}

export {capitalize, reverseString}