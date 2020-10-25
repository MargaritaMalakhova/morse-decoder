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
    let numLetters = [];
    for (let i =0, str = ''; i<expr.length; i++) {
		str += expr.charAt(i);
        if ((i+1) % 10 ==0) {
            numLetters.push(str)
            str = '';
        }
    }
    let decodedString = '';
    for (let i =0; i<numLetters.length; i++) {
		let numLetter = numLetters[i];
		if (numLetter === '**********') {
            decodedString += ' ';
        } else {
			let codeLetter='';
			for (let j = 0; j <= numLetter.length; j = j + 2) {
					if (numLetter[j] === '1' && numLetter[j + 1] === '1') {
						codeLetter += '-';
					}
					if (numLetter[j] === '1' && numLetter[j + 1] === '0') {
						codeLetter += '.';
					}
			}
			decodedString += MORSE_TABLE[codeLetter];
		}
	}
	return decodedString;
}

module.exports = {
    decode
}