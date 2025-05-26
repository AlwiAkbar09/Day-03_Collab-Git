// Exe 1
let input = 9;
let limit = 10;
for (i = 1; i <= 10; i++) {
    console.log(`${input} x ${i}`);
}

// Exe 2
let word = 'madam';
let reversed='';

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}
 if (reversed === word ){
  console.log(`${word} is palindrome`);
 } else {
  console.log(`${word} is not palindrome`);
 }



// Exe 3
let centi_meter = 100000;
let kilo_meter = centi_meter / 100000;
    console.log(`${kilo_meter} KM`);

// Exe 4
let number = 1000;
let Rupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
});

    console.log(Rupiah.format(number));

// Exe 5
let string = "Hello World";
let search_string ="ell";
let result = string.replace (search_string, "");
    console.log(result);

// Exe 6
const str = "hello world";
const capitalized = str.replace(/\b\w/g, char => char.toUpperCase());
console.log(capitalized); 

// Exe 7

// Exe 8
var num1 = 42;
var num2 = 27;
var largest_value = Math.max(num1 , num2);
console.log(largest_value);

// Exe 9
var num1 = 42;
var num2 = 27;
var num3 = 18;
var min, mid, max;

// Find min
if (num1 < num2 && num1 < num3) {
  min = num1;
  if (num2 < num3) {
    mid = num2;
    max = num3;
  } else {
    mid = num3;
    max = num2;
  }
} else if (num2 < num1 && num2 < num3) {
  min = num2;
  if (num1 < num3) {
    mid = num1;
    max = num3;
  } else {
    mid = num3;
    max = num1;
  }
} else {
  min = num3;
  if (num1 < num2) {
    mid = num1;
    max = num2;
  } else {
    mid = num2;
    max = num1;
  }
}

console.log(min, mid, max);


// Exe 10
var str_hello = 'hello';
if (typeof str_hello == "string"){
    console.log(1);
} else if (typeof str_hello == "number"){
     console.log(2);
} else {
    console.log(3);
}
   
// Exe 11
var string_= 'An apple a day keeps the doctor away';
var replace_Aa = string_.replaceAll("a", "*").replaceAll("A", "*");
console.log(replace_Aa);