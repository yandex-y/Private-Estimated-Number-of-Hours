const inputBulan = document.querySelectorAll('form > input')[0],
      inputHari = document.querySelectorAll('form > input')[1],
      inputJam = document.querySelectorAll('form > input')[2],
      inputMenit = document.querySelectorAll('form > input')[3],
      display1 = document.querySelector('.container > p:first-child'), 
      display2 = document.querySelector('.container > p:last-child')
      
      hitung()
      
      inputBulan.onkeyup = () => {
          hitung()
      }
      inputHari.onkeyup = () => {
          hitung()
      }
      inputJam.onkeyup = () => {
          hitung()
      }
      inputMenit.onkeyup = () => {
          hitung()
      }
      
      inputBulan.onchange = () => {
          hitung()
      }
      inputHari.onchange = () => {
          hitung()
      }
      inputJam.onchange = () => {
          hitung()
      }
      inputMenit.onchange = () => {
          hitung()
      }

function hitung(){
    let dateNow = new Date().getTime(),
          bulan = parseFloat(inputBulan.value) * 2628002880,
          hari = parseFloat(inputHari.value) * 86400000,
          jam = parseFloat(inputJam.value) * 3600000,
          menit = parseFloat(inputMenit.value) * 60000
          
          if(inputBulan.value.length == 0 && inputHari.value.length == 0 && inputJam.value.length == 0 && inputMenit.value.length == 0){
              display2.innerHTML = 'Masukkan input Terlebih Dahulu'
          }else{
              
              
          let dispBulan = inputBulan.value + ' Bulan ',
              dispHari = inputHari.value + ' Hari ',
              dispJam = inputJam.value + ' Jam ',
              dispMenit = inputMenit.value + ' Menit '
              
          if(inputBulan.value.length == 0){
              bulan = 0
              dispBulan = ''
          }
          if(inputHari.value.length == 0){
              hari = 0
              dispHari = ''
          }
          if(inputJam.value.length == 0){
              jam = 0
              dispJam = ''
          }
          if(inputMenit.value.length == 0){
              menit = 0
              dispMenit = ''
          }
          
          const hasil = new Date(dateNow + bulan + hari + jam + menit);
          let cekHasilHari = hasil.getDay(),
              cekHasilBulan = hasil.getMonth(),
              cekHasilJam = hasil.getHours(),
              cekHasilMenit = hasil.getMinutes();
          
          switch(cekHasilHari){
              case 1:
                  cekHasilHari = 'Senin';
                  break;
              case 2:
                  cekHasilHari = 'Selasa';
                  break;
              case 3:
                  cekHasilHari = 'Rabu';
                  break;
              case 4:
                  cekHasilHari = 'Kamis';
                  break;
              case 5:
                  cekHasilHari = 'Jum\'at';
                  break;
              case 6:
                  cekHasilHari = 'Sabtu';
                  break;
              case 0:
                  cekHasilHari = 'Minggu';
                  break;
          }
          
          switch(cekHasilBulan){
              case 0:
                  cekHasilBulan = 'Januari';
                  break;
              case 1:
                  cekHasilBulan = 'Februari';
                  break;
              case 2:
                  cekHasilBulan = 'Maret';
                  break;
              case 3:
                  cekHasilBulan = 'April';
                  break;
              case 4:
                  cekHasilBulan = 'Mei';
                  break;
              case 5:
                  cekHasilBulan = 'Juni';
                  break;
              case 6:
                  cekHasilBulan = 'Juli';
                  break;
              case 7:
                  cekHasilBulan = 'Agustus';
                  break;
              case 8:
                  cekHasilBulan = 'September';
                  break;
              case 9:
                  cekHasilBulan = 'Oktober';
                  break;
              case 10:
                  cekHasilBulan = 'November';
                  break;
              case 11:
                  cekHasilBulan = 'Desember';
                  break;
          }
          
          if(cekHasilMenit.toString().length === 1){
              cekHasilMenit = '0' + cekHasilMenit
          }
          
           if(cekHasilJam.toString().length === 1){
              cekHasilJam = '0' + cekHasilJam
          }
          
          display1.innerHTML = `${dispBulan} ${dispHari} ${dispJam} ${dispMenit}`
          display2.innerHTML = `${cekHasilHari}, ${hasil.getDate()} ${cekHasilBulan} ${hasil.getFullYear()} - ${cekHasilJam}:${cekHasilMenit}`
          }
}