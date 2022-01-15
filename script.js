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
  alert('encode')
  document.getElementById('output').value = input;
}

function decode() {
  var input = document.getElementById('input').value;
  alert('decode')
  document.getElementById('output').value = input;
}