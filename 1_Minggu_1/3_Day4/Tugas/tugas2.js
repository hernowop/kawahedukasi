/**
 * Buatlah program di mana program tersebut akan mem-filter harga (number)
 * Apabila angka yang dimasukkan kurang dari 1, maka akan terprint "TIDAK VALID"
 * Dan apabila angka yang dimasukkan lebih besar sama dengan 1 dan lebih kecil sama dengan 100000, maka akan terprint "MURAH BANGET"
 * Apabila lebih dari 100000, akan terprint "MAHAL BANGET"
 */

let harga = "50000";

if(harga < 1){
    console.log("TIDAK VALID");
}else if(harga >= 1 && harga <= 100000){
    console.log("MURAH BANGET");
}else if(harga > 100000){
    console.log("MAHAL BANGET")
}else{
    console.log("ERROR");
}