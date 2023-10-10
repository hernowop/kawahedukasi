//DIKUMPULKAN HARI MINGGU TERAKHIR JAM 12 MALAM

/**
 * Perang melawan Alien, buatlah program untuk memfilter kategori penduduk yang berhak dan wajib perang melwan alien
 */

/**
 * Tingkatan jabatan untuk pria
 * Tentara > Ofiicer I > Officer II > Jendral Perang
 */

/**
 * Tingkatan jabatan wanita
 * Medis > Officer Medis
 */

/**
 * Medis >>> Usia minimal 18 tahun, Maksimal 30 tahun
 * Officer Medis >>> Usia minimal 30 tahun, Maksimal 55 tahun, Pengalaman militer 10 tahun.
 * Tentara >>> Usia minimal 18 tahun, maksimal 30 tahun, Pengalaman militer 5 tahun
 * Officer I >>> Usia minimal 25 tahun, Maksimal 45 tahun, Pengalaman militer 7 tahun
 * Officer II >>> Usia minimal 30 tahun, Maksimal 50 tahun, Pengalaman militer 9 tahun
 * Jendral Perang >>> Usia minimal 40 tahun, Maksimal 65 tahun, Pengalaman militer 15 tahun
 */

/**
 * Baru >>> Pengalaman militer dibawah 5 tahun
 * Berpengalaman >>> Pengalaman militer diatas 5 tahun, dibawah 10 tahun
 * Sangat berpengalaman >>> Pengalaman militer diatas 10 tahun
 */

let nama; //String
let umur; //Number
let jenisKelamin; //String
let pengalamanMiliterTahun;//Number
let pengalamanMiliterKategori;//String
let jabatan; //String

/**
 * Jawaban : Ubah value dari variable (jabatan) menjadi => "Halo (nama) DENGAN UMUR (umur) DAN JENIS KELAMIN (jeniskelamin) DENGAN PENGALAMAN MILITER ANDA YANG 
 * 
 */

//your code here

nama = "Ronald";
umur = 6;
jenisKelamin = "laki-laki"; //perempuan
pengalamanMiliterTahun = 26;

if(pengalamanMiliterTahun < 5){
    pengalamanMiliterKategori = "baru";
}else if(pengalamanMiliterTahun >= 5 && pengalamanMiliterTahun <= 10){
    pengalamanMiliterKategori = "berpengalaman";
}else if(pengalamanMiliterTahun > 10){
    pengalamanMiliterKategori = "Sangat Berpengalaman";
}else{
    console.log("Error Pengalaman Militer Kategori");
}


if(jenisKelamin == "laki-laki"){
    if(((umur >= 18 && umur <= 30)) && (pengalamanMiliterTahun < 5)){
        jabatan = "Tentara";
    }else if(((umur >= 25 && umur <= 45)) && (pengalamanMiliterTahun < 7)){
        jabatan = "Officer I";
    }else if(((umur >= 30 && umur <= 50)) && (pengalamanMiliterTahun < 9)){
        jabatan = "Officer II";
    }else if(((umur >= 40 && umur <= 65)) && (pengalamanMiliterTahun < 15)){
        jabatan = "Jendral Perang";
    }else{
        jabatan = "ERROR laki-laki";
    }
}else if(jenisKelamin == "perempuan"){
    if(((umur >= 18 && umur < 30)) && (pengalamanMiliterTahun < 10)) {
        jabatan = "Medis";
    }else if (((umur >= 30 && umur <= 55)) && (pengalamanMiliterTahun >= 10)){
        jabatan = "Officer Medis";
    }else{
        jabatan = "ERROR perempuan";
    }
}else{
    console.log("ERROR jenisKelamin");
}

console.log(`Halo nama saya adalah ${nama} DENGAN UMUR ${umur} DAN JENIS KELAMIN ${jenisKelamin} DENGAN PENGALAMAN MILITER ${pengalamanMiliterTahun} TAHUN MEMBUAT SAYA MASUK KATEGORI ${pengalamanMiliterKategori} ${jabatan.toUpperCase() }`);


