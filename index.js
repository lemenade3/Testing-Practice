function capitalize(string) {
    let array = Array.from(string)
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase()
    }
    array[0] = array[0].toUpperCase()
    let concatArray = array.join('')
    return concatArray
}

function reverseString(string) {
    let array = Array.from(string)
    let reverseArray = array.reverse()
    let reversedString = reverseArray.join('')
    return reversedString
}

const calculator = {
    add: function(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 'Error'
        } else {
            return a + b
        }
    },

    subtract: function(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 'Error'
        } else {
            return a - b
        }
    },

    divide: function(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 'Error'
        } else {
            return a / b
        }
    },

    multiply: function(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 'Error'
        } else {
            return a * b
        }
    },

    caeserCipher: function(string, n) {
        let array = Array.from(string)
        const special = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        for (let i = 0; i < array.length; i++) {
            let code = array[i].charCodeAt(0)
            let newCode = code + n
            while (code <= 122 && newCode > 122) {
                newCode -= 26
            }
            while (code >= 97 && newCode < 97) {
                newCode += 26
            }
            while (code <= 90 && newCode > 90) {
                newCode -= 26
            }
            while (code >= 65 && newCode < 65) {
                newCode += 26
            }
            if (special.test(array[i])) {
                newCode = code
            }
            if (code >= 48 && code <= 57) {
                newCode = code
            }
            array[i] = String.fromCharCode(newCode)
        }
        let cipher = array.join('')
        return cipher
    }
}

function analyseArray(array) {
    let object = {}
    return object
}


export {capitalize, reverseString, calculator, analyseArray}