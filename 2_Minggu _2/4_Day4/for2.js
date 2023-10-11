//FOR LOOP 2

//CARA PENAMBAHAN DI STRING

// const a = "jer";
// const b = "a";
// const c = "pah";

// console.log(a+b+c+" "+a+b+c);

//FOR
//FOR (1; 2; 3);
//1. NILAI AWAL (let i = 0);
//2. CONDITION (TRUE / FALSE);
//3. INCREMENT (++ / --)

// CASE 1
// MENGHITUNG HURUF
// const binatang = `jerapah`;
// const huruf = `j`;
// let detekhuruf = 0;

// //BINATANG.LENGTH = 7
// for(let i = 0; i < binatang.length; i++){
//     if(binatang[i] === huruf){
//         console.log(`HURUF ${binatang[i]} TERDETEKSI`);
//         detekhuruf++;
//     }else{
//         console.log(`HURUF TIDAK TERDETEKSI`)
//     }
// }

// console.log(`Huruf yang terdeteksi berjumlah ${detekhuruf}`);

// CASE 2
// MENGGANTI HURUF VOCAL

// const kata = `JAVASCRIPT IS SO COOOOOOOOOOL`;
// const kataPengganti = `$`;
// let hasil = "";

// for (let i = 0; i < kata.length; i++){
//     if(kata[i] === `a` || kata[i] === 'i' || kata[i] === 'u' || kata[i] === 'e' || kata[i] === 'o' ||
//        kata[i] === `A` || kata[i] === 'I' || kata[i] === 'U' || kata[i] === 'E' || kata[i] === 'O'
//     ){
//         hasil = hasil + kataPengganti;
//     }else{
//         hasil = hasil + kata[i];
//     }
// }

// console.log(hasil);

//CASE 3
//DETECT ANGKA GANJIL ATAU GENAP ATAU ERROR

const angka = `55848548956asasasasq`;
let ganjil = 0;
let genap = 0;
let hurufVokal = 0;
let hurufNonVokal = 0;

for(let i = 0; i < angka.length; i++){
    if(angka[i] % 2 == 1){
        ganjil++;
    }else if(angka[i] % 2 == 0){
        genap++;
    }else{
        if(
        angka[i] === `a` || angka[i] === 'i' || angka[i] === 'u' || angka[i] === 'e' || angka[i] === 'o' ||
        angka[i] === `A` || angka[i] === 'I' || angka[i] === 'U' || angka[i] === 'E' || angka[i] === 'O'
        ){
            hurufVokal++;
        }else{
            hurufNonVokal++;
        }
    }
    
}

console.log(`Jumlah Ganjil = ${ganjil}`);
console.log(`Jumlah Genap = ${genap}`);
console.log(`Jumlah hurufVokal = ${hurufVokal}`);
console.log(`Jumlah hurufNonVokal = ${hurufNonVokal}`);