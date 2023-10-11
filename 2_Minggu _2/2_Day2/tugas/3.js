//Buatlah program menggunakan "switc case" untuk memindahkan channel televisi menggunakan remote rusak.

/**
 * LIST CHANNEL
 * 1 TVRI
 * 2 MNCTV
 * 3 INDOSIAR
 * 4 ANTV
 * 5 RCTI
 * 6 SCTV
 * 7 TRANS7
 */

let inputRemote; //Number (Random dari 1 - 26)
let channelTV;

//Jika menemukan channel tampilkan "Input remote rusak adalah channel ke-[inputRemote] dan hasilnya adalah channel [channelTV]"
//Jika tidak menemukan channel tampilkan "Error, sepertinya harus ganti remote nih"

//your code here

let a = 15;
let b;

switch(a){
    case 1:
        b = "TVRI";
        break;
    case 2:
        b = "MNCTV";
        break;
    case 3:
        b = "INDOSIAR";
        break;
    case 4:
        b = "ANTV";
        break;
    case 5:
        b = "RCTI";
        break;
    case 6:
        b = "SCTV";
        break;
    case 7:
        b = "TRANS7";
        break;
}

if(b === undefined){
    console.log(`Error, sepertinya harus ganti remote nih`);
}else{
    console.log(`Input remote rusak adalah channel ke-${a} dan hasilnya adalah channel ${b}`);
}
