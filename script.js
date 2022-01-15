function chooseSelectTo() {
  document.getElementById('input').value = ''
  document.getElementById('output').value = ''
}

function calculate() {
  var select = document.getElementById('selectFrom').value;

  select == 'encode' ? encode() :  decode();
}

function encode() {
  var input = document.getElementById('input').value;
  var key = document.getElementById('key').value;

  console.log('input', input);
  console.log('key', key);

  var output = input + key
  console.log('output', output);
  document.getElementById('output').value = output;
}

function decode() {
  var input = document.getElementById('input').value;
  document.getElementById('output').value = input;
}