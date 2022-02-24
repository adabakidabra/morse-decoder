const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let num = [];
    let value;
    num = expr.match(/.{0,10}/g)
    .map((value) => {
        value = value.substring(value.indexOf('1'))
        .replace(/10/g,'.')
        .replace(/11/g,'-')
        .replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");
        Object.keys(MORSE_TABLE).map((e) => {
            if(e === value) {
                value = MORSE_TABLE[e];
            }
        });
        return value;
    });
    return num.join('');
}

module.exports = {
    decode
}