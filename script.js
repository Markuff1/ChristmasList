const days = document.getElementById('days'),
      minutes = document.getElementById('minutes'),
      hours = document.getElementById('hours'),
      seconds = document.getElementById('seconds');
let xYear = 2024;
setInterval(() => {
    findDate();
}, 1000);

function findDate(){
    let currentTime = new Date(),
        christmasYear = currentTime.getFullYear();

    // getMonth() method returns the month (from 0 to 11)
    if(currentTime.getMonth() == 11 && currentTime.getDate() > 25){
        christmasYear += 1; 
    }

    let christmasTime = new Date(christmasYear, 11, 25); 
    let dateDiff = Math.floor(christmasTime - currentTime);

    let DAYS = 0, HOURS = 0, MINUTES = 0, SECONDS = 0;

    if(currentTime.getMonth() != 11 || (currentTime.getMonth() == 11 && currentTime.getDate() != 25)){
        DAYS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        HOURS = Math.floor((dateDiff) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        MINUTES = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        SECONDS = Math.floor((dateDiff) % (1000 * 60) / 1000);
    }
    displayDate(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS));
}

function displayDate(d, h, m, s){
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

function setZero(timeValue){
    if(timeValue < 10){
        timeValue = "0" + timeValue;
    }
    return timeValue;
}



function exceller() {
    var uri = 'data:application/vnd.ms-excel;base64,',
      template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64 = function(s) {
        return window.btoa(unescape(encodeURIComponent(s)))
      },
      format = function(s, c) {
        return s.replace(/{(\w+)}/g, function(m, p) {
          return c[p];
        })
      }
    var myTable = document.getElementById("myTable").innerHTML;
    var ctx = {
      worksheet: name || '',
      table: myTable
    };
    var link = document.createElement("a");
    link.download = "Mark'sChristmasList.xls";
    link.href = uri + base64(format(template, ctx))
    link.click();
  }
