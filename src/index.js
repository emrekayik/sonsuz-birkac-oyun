/* 
  İki oyuncu oyunu oynuyorlar: 
  Her ikisi de, birbirinden habersiz, 
  1. toplamları 9 olan üç doğal sayı seçiyor.
  2. En büyük sayılar, ortanca sayılar ve en küçük sayılar karşılaştırılıyor. 
  3. Her karşılaştırmada büyük sayının sahibi 1.
  4. Küçük sayının sahibi 0 puan alıyor. 
  5. Eşitlik halinde her iki oyuncu da 1/2puan alıyor.
*/
var oyuncu1 = [5, 2, 2];
var oyuncu1Skor = 0;
var oyuncu2 = [7, 1, 1];
var oyuncu2Skor = 0;

function init() {
  // Üç sayı şartı sağlanma kontrolü
  if (oyuncu1.length > 1 && oyuncu1.length <= 3 && oyuncu2.length > 1 && oyuncu2.length <= 3) {
    console.log(toplam(oyuncu1));
    console.log(toplam(oyuncu2));
    // sayıların içindeki sayıların toplamlarının 9 olma kontrolü
    if (toplam(oyuncu1) == 9 && toplam(oyuncu2) == 9) {
      // Dizileri büyükten küçüğe sıralayalım
      siralayici(oyuncu1);
      siralayici(oyuncu2);
      console.log(oyuncu1)
      console.log(oyuncu2)

      for (let i = 0; i < 3; i++) {
        if (oyuncu1[i] > oyuncu2[i]) {
          oyuncu1Skor += 1;
        } else if (oyuncu1[i] == oyuncu2[i]) {
          oyuncu1Skor += 0.5;
          oyuncu2Skor += 0.5;
        } else if(oyuncu1[i] < oyuncu2[i]) {
          oyuncu2Skor += 1;
        }
      }

      console.log(`oyuncu1Skor: ${oyuncu1Skor}`);
      console.log(`oyuncu2Skor: ${oyuncu2Skor}`);
      if (oyuncu1Skor > oyuncu2Skor) {
        console.log("Oyuncu 1 kazandı")
      } else if (oyuncu1Skor == oyuncu2Skor) {
        console.log("Berabere")
      } else {
        console.log("Oyuncu 2 kazandı")
      }
    } else {
      console.log("Oyuncuların seçtikleri sayının toplamı 9'a eşit değil!")
    }
  } else {
    console.log('Oyuncuların seçtikleri sayı olması gerekenden uzun!');
  }
}

// Sayıları büyükten küçüğe sıralayan fonksiyon
function siralayici(dizi) {
  return dizi.sort((a, b) => b - a);
}

// Dizideki sayıların toplamlarını alan fonksiyon
function toplam(dizi) {
  return dizi.reduce((a, b) => a + b, 0);
}

init();