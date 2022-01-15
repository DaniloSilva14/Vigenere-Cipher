function chooseSelectTo() {
  document.getElementById('input').value = ''
  document.getElementById('output').value = ''
}

function calculate() {
  var select = document.getElementById('selectFrom').value;

  select == 'encode' ? encode() : decode();
}

function encode() {
  var input = document.getElementById('input').value;
  var key = document.getElementById('key').value;

  console.log(generateKey(input, key)); 
  

  var output = input + key

  //console.log('input', input);
  //console.log('key', key);
  //console.log('output', output);

  document.getElementById('output').value = output;
}

function decode() {
  var input = document.getElementById('input').value;
  document.getElementById('output').value = input;
}

// scripts vigenere

// essa funcao gera uma chave do tamanho do input
function generateKey(str, key) {
  key = key.split("");

  if (str.length == key.length)
    return key.join("");
  else {
    let temp = key.length;
    for (let i = 0; i < (str.length - temp); i++) {
      key.push(key[i % ((key).length)])
    }
  }

  return key.join("");
}