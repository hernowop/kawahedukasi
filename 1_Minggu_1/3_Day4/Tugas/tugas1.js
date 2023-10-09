/**
 * Buatlah program dimana program tersebut akan menghitung panjang string
 * Jika panjang adalah bilangan genap, maka akan terprint "WOHO"
 * Apabila bilangan ganjil, akan terprint "OHOW"
 * Dan kalau diluar itu akan terprint "ERROR"
 */

const a = 5;

const panjangA = a.length;

if(panjangA % 2 === 0 ){
    console.log("WOHO");
}else if(panjangA % 2 == 1){
    console.log("OHOW");
}else{
    console.log("ERROR")
}