// Intermediate If dan Nested If

// //This is flagging, mengubah dari a = 5 menjadi a = 6

// let a = 5;
// a = 6;
// let b = 8;

// //nested if (if di dalam if)

// if(a == 6){
//     if(b==8){
//         console.log("IF IF");
//     }
// }


// if(a == 6 && b == 8){
//     console.log("IF IF");
// }

// let a = 5;
// let b = 10;
// let hasil;

// if((a + b) % 2 == 0){
//     hasil = "genap";
// }else if((a + b ) % 2 == 1){
//     hasil = "ganjil";
// }else{
//     hasil = "tidak valid";
// }

// console.log(hasil);

// let gender = "male";
// let errorMessage = "gender tidak valid";
// let myName;

// if(gender == "male"){
//     console.log("nama saya adalah tono");
// }else if (gender == "female"){
//     console.log("nama saya adalah tina");
// }else{
//     console.log(errorMessage);
// }

// let binatang = "ayam";
// let makanan = "biji-bijian";

// if(binatang == "ayam" && makanan == "biji-bijian" ){
//     console.log(`binatang adalah ${binatang}, dan makananya adalah ${makanan}`);
// }

// let umur = 20;
// let tahap;

// if(umur <= 18){
//     if (umur <= 10){
//         tahap = "anak-anak";
//     }else{
//         tahap = "remaja";
//     }
// }else{
//     if(umur >= 65){
//         tahap = "lansia";
//     }else{
//         tahap = "dewasa"
//     }
// }

// console.log(tahap);

// let kodebaju = 3;
// let merkbaju = "PRADA";
// let qty = 5;
// let harga;

// if (kodebaju == 1){
//     if (merkbaju == "IMP"){
//         harga = 5000;
//     } else if (merkbaju == "PRADA"){
//         harga = 10000;
//     } else if (merkbaju == "GUCCI"){
//         harga = 20000;
//     }else{
//         harga = "HARGA TIDAK VALID"
//     }
// }else if(kodebaju == 2){
//     if (merkbaju == "IMP"){
//         harga = 6000;
//     } else if (merkbaju == "PRADA"){
//         harga = 12000;
//     } else if (merkbaju == "GUCCI"){
//         harga = 24000;
//     }else{
//         harga = "HARGA TIDAK VALID"
//     }
// }else if(kodebaju == 3){
//     if (merkbaju == "IMP"){
//         harga = 7500;
//     } else if (merkbaju == "PRADA"){
//         harga = 15000;
//     } else if (merkbaju == "GUCCI"){
//         harga = 30000;
//     }else{
//         harga = "HARGA TIDAK VALID"
//     }
// }else{
//     harga = "harga tidak valid";
// }

// console.log(`anda memilih kode baju ${kodebaju} dengan merk ${merkbaju} sebanyak ${qty} dengan total harga Rp.${qty*harga}`);

let kodebaju = 1;
let merkbaju = "PRADA";
let qty = 2;
let harga;

if(kodebaju == 1 && merkbaju == "IMP"){
    harga = 10000;
}else if(kodebaju == 2 && merkbaju == "IMP"){
    harga = 12000;
}else if(kodebaju == 3 && merkbaju == "IMP"){
    harga = 15000;
}else if(kodebaju == 1 && merkbaju == "PRADA"){
    harga = 13000;
}else if(kodebaju == 2 && merkbaju == "PRADA"){
    harga = 15000;
}else if(kodebaju == 3 && merkbaju == "PRADA"){
    harga = 17000;
}else if(kodebaju == 1 && merkbaju == "GUCCI"){
    harga = 12000;
}else if(kodebaju == 2 && merkbaju == "GUCCI"){
    harga = 14500;
}else if(kodebaju == 3 && merkbaju == "GUCCI"){
    harga = 17000;
}else{
     harga = "Harga Tidak Valid";
}

console.log(
    `anda memilih kode baju ${kodebaju} dengan merk ${merkbaju} sebanyak ${qty} dengan total harga Rp.${qty * harga}`
);