function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and create a new array
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);




function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const arrayToSort = [5, 2, 8, 1, 9, 3];
const sortedArray = sortArrayDescending(arrayToSort);
console.log(sortedArray);
