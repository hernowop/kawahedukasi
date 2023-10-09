//VAR, LET DAN CONST

//VAR sudah tidak dipakai lagi karena memiliki function block 

for(var i = 0 ; i < 9 ; i++){
    console.log("Hello");
}

console.log(i);

//Const harus dideklarasikan dan tidak boleh kosong
//Tipe data non-primitif itu ada Array, Object

//Tipe data primitif ada 5
//String mewakili data dan karakter
const nama = 'danu'; //dapat menggunakan petik dua atau petik satu
console.log(nama);

//number
const number = 200;
console.log(number);

//BigInt
const bigint = 22222222222222222222222222222222222222222222222222222930230293
console.log(bigint);

//Boolean
const boolean = true;
console.log(boolean);

//undefined
var undefined1;
console.log(undefined1);

//null
var null2 = null;
console.log(null2);

//Symbol karang dibahas

//operasi data primitif
let a = 9;
let b = 8;

let c = a + b;

console.log(c);

let d = 9;
let e = 8;

let f = d%e;

console.log(f);