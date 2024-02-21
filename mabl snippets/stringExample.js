/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 */
function mablJavaScriptStep(mablInputs, callback) {

    // indexOf
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

    const searchTerm = 'dog';
    const indexOfFirst = paragraph.indexOf(searchTerm);

    console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
    // Expected output: "The index of the first "dog" from the beginning is 40"

    console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
    // Expected output: "The index of the 2nd "dog" is 52"


    // match, using regex at your own risk
    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);

    console.log(found);
    // Expected output: Array ["T", "I"]


    // normalize(), for converting unicode to human readable
    const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
    const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

    console.log(`${name1}, ${name2}`);
    // Expected output: "Amélie, Amélie"
    console.log(name1 === name2);
    // Expected output: false
    console.log(name1.length === name2.length);
    // Expected output: false

    const name1NFC = name1.normalize('NFC');
    const name2NFC = name2.normalize('NFC');

    console.log(`${name1NFC}, ${name2NFC}`);
    // Expected output: "Amélie, Amélie"
    console.log(name1NFC === name2NFC);
    // Expected output: true
    console.log(name1NFC.length === name2NFC.length);
    // Expected output: true


    // replace()
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

    console.log(p.replace('dog', 'monkey'));
    // Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


    const regexReplace = /Dog/i;
    console.log(p.replace(regexReplace, 'ferret'));
    // Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


    // slice, returns a section of string as a new string
    var str = 'The quick brown fox jumps over the lazy dog.';
    console.log(str.slice(31));
    // Expected output: "the lazy dog."

    console.log(str.slice(4, 19));
    // Expected output: "quick brown fox"

    console.log(str.slice(-4));
    // Expected output: "dog."

    console.log(str.slice(-9, -5));
    // Expected output: "lazy"


    // split
    str = 'The quick brown fox jumps over the lazy dog.';

    const words = str.split(' ');
    console.log(words[3]);
    // Expected output: "fox"

    const chars = str.split('');
    console.log(chars[8]);
    // Expected output: "k"

    const strCopy = str.split();
    console.log(strCopy);
    // Expected output: Array ["The quick brown fox jumps over the lazy dog."]


    // substring
    str = 'Mozilla';

    console.log(str.substring(1, 3));
    // Expected output: "oz"

    console.log(str.substring(2));
    // Expected output: "zilla"


    // toLowerCase
    const sentence = 'The quick brown fox jumps over the lazy dog.';

    console.log(sentence.toLowerCase());
    // Expected output: "the quick brown fox jumps over the lazy dog."


    // trim, removes whitespace from both sides of string
    const greeting = '   Hello world!   ';

    console.log(greeting);
    // Expected output: "   Hello world!   ";

    console.log(greeting.trim());
    // Expected output: "Hello world!";


    let result = 'strings';
    callback(result);
}
