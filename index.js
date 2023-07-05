// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

//split bir dizeyi belirli bir ayracı kullanarak parçalara bölen bir dize yöntemidir.

function dosyaAdiniBul(dosyaYolu) {
  if (dosyaYolu === "") {
    return "";
  }
  const dosyaBolumleri = dosyaYolu.split("/");
  const dosyaAdi = dosyaBolumleri[dosyaBolumleri.length - 1];
  return dosyaAdi;
}
console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(dosyaAdiniBul("Beethoven_5.mp3"));
console.log(dosyaAdiniBul(""));

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4

  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

// function ortalamaBul(arrayim) {
//   if (arrayim.lenght === 0) {
//     return null;
//   }
//   const toplam = arrayim.reduce((x, y) => x + y, 0);
//   const ortalama = toplam / arrayim.lenght;
//   return ortalama;
// }

function ortalamaBul(sayilar) {
  if (sayilar.length === 0) {
    const deger = null;
    return deger;
  }

  const toplam = sayilar.reduce((acc, curr) => acc + curr, 0);
  const ortalama = toplam / sayilar.length;

  return ortalama;
}
console.log("G2.1", ortalamaBul([]));
console.log("G2.2", ortalamaBul([4]));
console.log("G2.3", ortalamaBul([50, -26, 153, 7]));
console.log("G2.4", ortalamaBul([109, 216, 288, 143, 71, 185, -278, 194, 5]));

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(sayilar, ortalamaBul) {
  const ort = ortalamaBul(sayilar);
  if (ort === null) {
    const nullicin = null;
    return nullicin;
  }

  const buyukler = sayilar.filter((sayi) => sayi >= ort);
  return buyukler;
}

console.log("g3.1", []);
console.log("g3.2", [4]);
console.log("g3.3", [50, -26, 153, 7]);
console.log("g3.4", [109, 216, 288, 143, 71, 185, -278, 194, 5]);

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
