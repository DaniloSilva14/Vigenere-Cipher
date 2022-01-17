function chooseSelectTo() {
  document.getElementById('input').value = ''
  document.getElementById('output').value = ''
}

function calculate() {
  var select = document.getElementById('selectFrom').value;
  var input = document.getElementById('input').value;
  var key = document.getElementById('key').value;

  var useKey = generateKey(input, key)
  let output = '';

  if (select == 'encode') {
    output = cipherEncryptText(input, useKey)
  } else {
    output = cipherDecryptText(input, useKey)
  }

  document.getElementById('output').value = output;
}

// scripts vigenere

// essa funcao gera uma chave do tamanho do input
function generateKey(str, key) {
  key = key.split("");

  if (str.length == key.length)
    return key.join("").toUpperCase();
  else {
    let temp = key.length;
    for (let i = 0; i < (str.length - temp); i++) {
      key.push(key[i % ((key).length)])
    }
  }

  return key.join("").toUpperCase();
}

// algoritmo encriptacao da cifra de Vigenere 
function cipherEncryptText(str, key) {
  let cipher_text = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      cipher_text += " ";
    } else {
      let x = (str[i].toUpperCase().charCodeAt(0) + key[i].charCodeAt(0)) % 26;

      x = caseSensitive(x, str[i])

      cipher_text += String.fromCharCode(x);
    }
  }

  return cipher_text;
}

// algoritmo decriptacao da cifra de Vigenere 
function cipherDecryptText(str, key) {
  let orig_text = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      orig_text += " ";
    } else {
      let x = (str[i].toUpperCase().charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;

      x = caseSensitive(x, str[i])

      orig_text += String.fromCharCode(x);
    }
  }

  return orig_text;
}

// metodos
const isUpperCase = (string) => /^[A-Z]*$/.test(string)
const isLowerCase = (string) => /^[a-z]*$/.test(string)
const isNumeric = (string) => /^[1-9]*$/.test(string)

function caseSensitive(str, caracter) {
  if (isUpperCase(caracter)) {
    str += 'A'.charCodeAt(0)
  } else {
    str += 'a'.charCodeAt(0)
  }
  return str;
}