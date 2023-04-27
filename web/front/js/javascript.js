function firstNonRepeatingChar(str) {
    let seen = new Map()

    for (let char of str) {
        if (!seen.has(char)) {
            seen.set(char, 1)
        } else {
            seen.set(char, seen.get(char) + 1)
        }
    }

    for (let char of str) {
        if (seen.get(char) === 1) return char
    }

    return null
}

console.log(firstNonRepeatingChar('abacddbec'))

function bubble_sort(array) {
    for (let i = 0, j = 1; j < array.length; i++, j++) {
        if (array[i] > array[j]) {
            let tmp = array[i]
            array[i] = array[j]
            array[j] = tmp

            i = -1
            j = 0
        }
    }

    return array
}
console.log("Array before bubble-sort: [7, 4, 2, 1, 9]")
console.log("Array after bubble-sort: " + bubble_sort([7, 4, 2, 1, 9]))

function invert(array) {
    let invertedArray = []

    for (let i = array.length - 1; i >= 0; i--) {
        invertedArray.push(array[i])
    }

    return invertedArray
}

console.log(invert([1,2,3]))

function invertByReference(array) {
    let tmpArray = [... array]

    for (let i = tmpArray.length - 1, j = 0; i >= 0; i--, j++) {
        array[j] = tmpArray[i]
    }
}

let array = [1, 2, 3]
invertByReference(array)
console.log(array)

function capitalize(string) {
    let wordArray = string.split(" ")

    wordArray = wordArray.map( (word) => {
        let firstLetter = word.charAt(0)
        firstLetter = firstLetter.toUpperCase()
        let restOfWord = word.slice(1)
        return firstLetter + restOfWord
    })

    return wordArray.join(" ")
}

console.log(capitalize("test string for capitalize"))

function greatestCommonDivisor(num1, num2) {
    let smallestNumber = Math.min(num1, num2)
    let max = 1;

    for (let i = 2; i <= Math.ceil(smallestNumber / 2); i++) {
        if (num1 % i == 0 && num2 % i == 0) max = i;
    }

    return max;
}

console.log(greatestCommonDivisor(15, 27));

function hackerSpeak(string) {
    string = string.replaceAll('a', '4');
    string = string.replaceAll('i', '1');
    string = string.replaceAll('e', '3');
    string = string.replaceAll('s', '5');
    string = string.replaceAll('o', '0');
    
    return string;
}

console.log(hackerSpeak("Javascript es divertido"));

function factorize(num) {
    let factors = []

    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i == 0) factors.push(i)
    }

    factors.push(num)

    return factors
}

console.log(factorize(12))

function removeDuplicates(array) {
    return Array.from(new Set(array));
}

console.log(removeDuplicates([1, 2, 1, 2, 3, 4, 3]))

function smallestString(listOfStrings) {
    let smallest = Number.MAX_VALUE

    for (let string of listOfStrings) {
        smallest = Math.min(string.length, smallest)
    }

    return smallest
}

console.log(smallestString(["test", "flajkfljka", "lajksdñfja", "abc"]))

function isPalindrome(string) {
    return string === string.split("").reverse().join("")
}

console.log(isPalindrome("racecar"))

function orderAlphabetically(listOfStrings) {
    return listOfStrings.sort((a, b) => {
        let smallest = Math.min(a.length, b.length)

        for (let i = 0; i < smallest; i++) {
            if (a[i] < b[i]) return -1
            if (a[i] > b[i]) return 1
        }
        
        if (a.length < b.length) return -1
        return 1
    })
}

console.log(orderAlphabetically(["aaaa", "a", "b", "d", "c", "apple"]))

function medianAndMode(array) {
    array = array.sort()

    let answer = {}

    // calculate the median
    if (array.length % 2 === 0) {
        answer.median = (array[array.length / 2] + array[(array.length / 2) - 1]) / 2
    } else {
        answer.median = array[Math.floor(array.length / 2)]
    }

    // calculate the mode
    let count = new Map()
    for (let num of array) {
        if (count.has(num)) {
            count.set(num, count.get(num) + 1)
        } else {
            count.set(num, 1)
        }
    }

    let maxCount = 0
    for (let [key, value] of count) {
        if (value > maxCount) {
            answer.mode = key
            maxCount = value
        }
    }

    return answer
}

console.log(medianAndMode([1, 2, 2, 3, 3, 3]))

function mostFrequentString(listOfStrings) {
    let count = new Map()

    for (let string of listOfStrings) {
        if (count.has(string)) {
            count.set(string, count.get(string) + 1)
        } else {
            count.set(string, 1)
        }
    }

    let maxCount = 0, answer

    for (let [key, value] of count) {
        if (value > maxCount) {
            maxCount = value
            answer = key
        }
    }

    return answer
}

console.log(mostFrequentString(["abc", "123", "xyz", "abc", "123", "abc"]))

function isPowerOfTwo(num) {
    while (num > 1) {
        num /= 2
    }

    return num === 1
}

console.log(isPowerOfTwo(128))

function sortDescending(array) {
    return array.sort((a, b) => (b - a))
}

console.log(sortDescending([1, 2, 3, 4, 6, 2]))