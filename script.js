//Variabel
const inputBulan = document.querySelectorAll('form > input')[0],
      inputHari = document.querySelectorAll('form > input')[1],
      inputJam = document.querySelectorAll('form > input')[2],
      inputMenit = document.querySelectorAll('form > input')[3],
      display1 = document.querySelector('.container > p:first-child'), 
      display2 = document.querySelector('.container > p:last-child'),
      btn_reset = document.querySelector('.container > form > input[type=reset]'),
      arr = [inputBulan,inputHari,inputJam,inputMenit],
      days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'],
      month = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
      let numbers = 0;


//Run Function & Event Listener
hitung()
for(x of arr){x.onkeyup = () => {hitung()}}
for(x of arr){x.onchange = () => {hitung()}}
btn_reset.addEventListener('click',() => {
    display1.innerHTML = ':)';
    InputBefore() 
})


//Function
function hitung(){
    let dateNow = new Date().getTime(),
        bulan = parseFloat(inputBulan.value) * 2628002880,
        hari = parseFloat(inputHari.value) * 86400000,
        jam = parseFloat(inputJam.value) * 3600000,
        menit = parseFloat(inputMenit.value) * 60000,
        arr2 = [bulan,hari,jam,menit];
        
        if(inputBulan.value.length == 0 && inputHari.value.length == 0 && inputJam.value.length == 0 && inputMenit.value.length == 0){
              InputBefore()
          }else{
              let dispBulan = inputBulan.value + ' Bulan ',
                  dispHari = inputHari.value + ' Hari ',
                  dispJam = inputJam.value + ' Jam ',
                  dispMenit = inputMenit.value + ' Menit ',
                  arr3 = [dispBulan,dispHari,dispJam,dispMenit];
                  
                  for(x of arr){
                      if(x.value.length == 0){
                          arr2[numbers] = 0;
                          arr3[numbers] = '';
                        }
                        numbers++;
                    }
                    numbers = 0;
                    
                    let hasil = new Date(dateNow + arr2[0] + arr2[1] + arr2[2] + arr2[3]),
                        cekHasilBulan = hasil.getMonth(),  
                        cekHasilHari = hasil.getDay(),
                        cekHasilJam = hasil.getHours(),
                        cekHasilMenit = hasil.getMinutes(),
                        cekHasilBig = [cekHasilBulan,cekHasilHari],
                        cekHasilSmall = [cekHasilJam,cekHasilMenit];
              
                        for(x of month){
                            if(cekHasilBig[0] == numbers){
                                cekHasilBig[0] = x;
                            }
                            numbers++
                        }
                        numbers = 0
            
                        for(x of days){
                            if(cekHasilBig[1] == numbers){
                                cekHasilBig[1] = x;
                            }
                            numbers++
                        }
                        numbers = 0;
            
                        for(let i = 0; i <= 1;i++){
                            if(cekHasilSmall[i].toString().length === 1){
                                cekHasilSmall[i] = '0' + cekHasilSmall[i];
                            }
                        }
            
                        display1.innerHTML = `${arr3[0]} ${arr3[1]} ${arr3[2]} ${arr3[3]}`;
                        display2.innerHTML = `${cekHasilBig[1]}, ${hasil.getDate()} ${cekHasilBig[0]} ${hasil.getFullYear()} - ${cekHasilSmall[0]}:${cekHasilSmall[1]}`;
                    }
                }
                
function InputBefore(){
    display2.innerHTML = 'Masukkan input Terlebih Dahulu';
}