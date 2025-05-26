var text = 'The QuiCk BrOwN Fox';
var swapped = '';

for (var i = 0; i < text.length; i++) {
  var char = text[i];
  
  if (char === char.toUpperCase()) {
    swapped += char.toLowerCase();
  } else {
    swapped += char.toUpperCase();
  }
}

console.log(char);

