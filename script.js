//VARIABEL
const inpArr = [
    document.getElementById('month'),
    document.getElementById('day'),
    document.getElementById('hour'),
    document.getElementById('minute')
];
const maxvalue = [999999, 9999999, 999999999, 9999999999]
const btn_reset = document.getElementById('reset');
const display = document.getElementById('display');
const display2 = document.getElementById('display2');
const strDay = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'];
const strMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

//EVENT LISTENER
inpArr.forEach((x, i) => {
    x.addEventListener('input', (e) => {
        validasiValue(e.target, maxvalue[i], i)
        calc()
    })
})
inpArr.forEach((x, i) => {
    x.addEventListener('keydown', (e) => {
        if (e.key == 'Backspace') {
            if (e.target.value.length == 0) {
                inpArr[i-1].focus()
            }
        }
    })
})
btn_reset.addEventListener('click', () => {
    inpArr.forEach(x => {
        x.value = ''
    })
    calc()
})

//RUN FUNCTION
calc()

//FUNCTION
function calc() {

    const x = new Date();
    const newDate = []

    inpArr.forEach(x => {
        let nd;
        if (x.value.length == 0 || x.value == '') {
            nd = 0
        } else {
            nd = parseInt(x.value)
        }
        newDate.push(nd)
    })
    const getTimeTarget = new Date(x.getFullYear(),
        x.getMonth() + newDate[0],
        x.getDate() + newDate[1],
        x.getHours() + newDate[2],
        x.getMinutes() + newDate[3],
        x.getSeconds(),
        x.getMilliseconds());

    const mountOut = getTimeTarget.getMonth();
    const dayOut = getTimeTarget.getDay();
    let hourOut;
    let minuteOut;

    getTimeTarget.getHours() < 10 ? hourOut = '0' + getTimeTarget.getHours(): hourOut = getTimeTarget.getHours();
    getTimeTarget.getMinutes() < 10 ? minuteOut = '0' + getTimeTarget.getMinutes(): minuteOut = getTimeTarget.getMinutes()

    display2.innerText = `${newDate[0] == 0 ? '': newDate[0] + ' Bulan'} ${newDate[1] == 0 ? '': newDate[1] + ' Hari'} ${newDate[2] == 0 ? '': newDate[2] + ' Jam'} ${newDate[3] == 0 ? '': newDate[3] + ' Menit'}`
    display.innerText = `${strDay[dayOut]}, ${getTimeTarget.getDate()} ${strMonth[mountOut]} ${getTimeTarget.getFullYear()} - ${hourOut}.${minuteOut}`

}

function validasiValue(target, maxvalue, nextIndex) {
    if (target.value > maxvalue) {
        target.value = maxvalue;
        if (nextIndex < inpArr.length - 1) {
            inpArr[nextIndex+1].focus()
        }
    }
}