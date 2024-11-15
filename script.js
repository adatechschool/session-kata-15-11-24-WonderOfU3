const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}

let translateLatinCharacter = (character) =>
{
    return (latinToMorse[character.toUpperCase()]);
}

let getLatinCharacterList = (string) =>
{
    return (string.split(''));
}

let encode = (string) =>
{
    let tab = getLatinCharacterList(string);
    let res = "";
    for (let i = 0; i < tab.length; i++)
        res += translateLatinCharacter(tab[i]) + " ";
    return (res);
}

let translateMorseCharacter = (character) =>
{
    return(morseToLatin[character]);
}

let getMorseCharacterList = (string) =>
{
    return (string.split(' '));
}

let decode = (string) =>
{
    let tab = getMorseCharacterList(string);
    let res = "";
    for (let i = 0; i < tab.length; i++) {
        if (tab[i][0] === '/') {
            res += " ";
            tab[i].length > 1 ? tab[i] = tab[i].substring(1) : i++;
        }
        res += translateMorseCharacter(tab[i]);
    }
    return (res);
}

document.querySelector('.latin-button').addEventListener('click', () => {
    document.getElementById('latin-text').innerHTML = "";
    document.getElementById('latin-text').innerHTML = encode(document.getElementById('latin').value);
});

document.querySelector('.morse-button').addEventListener('click', () => {
    document.getElementById('morse-text').innerHTML = "";
    document.getElementById('morse-text').innerHTML = decode(document.getElementById('morse').value);
});
